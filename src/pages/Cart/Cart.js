import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "react-bootstrap/Button";
import {collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore";

const Cart = () => {  
  const { cart, removeItem, clear } = useContext(cartContext);
  const [ order, setOrder ] = useState({});
  const dataSw = getFirestore();

  useEffect(() => {
    setOrder({
        buyer: {
        name: "ahsoka tano",
        phone: "5417234354",
        email:"test@test.com",
      }, 
      items: cart.map((product) => {
        const {name, price, id} = product;
        return {name, price, id};
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) 
    }   );
  }, []);

  if (cart.length === 0) {
    return <h2>No hay productos en tu carrito</h2>;
  }

  const createOrder = () => {
    const querySnapshot = collection(dataSw, "order");

    addDoc(querySnapshot, order)
    .then((response) => {
      console.log(response.id);
      updateStockProducts();
      alert("Orden creada con exito");
    })
    .catch((error) => console.log(error))
  };

const updateStockProducts = () => {
   cart.forEach((product) => {
    const querySnapshot = doc(dataSw, "items", product.id);

    updateDoc(querySnapshot,{
      stock: product.stock - product.quantity,
    } )
    .then(() => {
   console.log("El producto actualizara su stock")
    })
    .catch((error) => console.log(error))
   })
} 

  return (
    <div style={{ padding: "40px" }}>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img alt={product.id} src={product.image} height="50px" />
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <h4>{product.quantity}</h4>
              <h4>{product.price}</h4>
              <Button
                onClick={() => removeItem(product.id)}
                style={{ height: "30px" }}
                variant="light"
              >
                Eliminar
              </Button>
            </div>
          </li>
        ))} 
      </ul>

      <div style={{ marginTop: "150px" }}>
        <Button variant="light" onClick={() => clear()}>
          Vaciar carrito
        </Button>
      </div>
      <div  style={{marginTop: "20px"}}>
      <Button variant="light" onClick={() => createOrder()}>Crear orden</Button>
      </div>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default Cart;
