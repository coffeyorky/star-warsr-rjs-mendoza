import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({ producto }) => {
  const {addItem} = useContext(cartContext);
  const [contador, setContador] = useState(0);

  return (
    <div width="200" className="productos">
      <img alt={producto.id} src={producto.imageid} width="200" />
      <h2>{producto.title}</h2>
      <h3>{producto.categoryid}</h3>
      <h3>{producto.description}</h3>
      <h3>{producto.stock}</h3>
      <h3>${producto.price}</h3>
      <ItemCount
        contador={contador}
        acValor={setContador}
        stock={producto.stock}
      />
      <div>
      <Button onClick={() => addItem(producto, contador)} variant="light">Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemDetail;
