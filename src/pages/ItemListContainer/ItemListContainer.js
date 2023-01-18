import ItemCount from "../../components/ItemConunt/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

const arreglo = [
       {img:"../img/thbbr.jpg", title: "Remera Bad batch", id: "st12", category: "Ropa", description:"Remera de talla universal con estampado de los personajes de la serie The Bad Batch"} ,
       {img:"../img/taza.png", title: "Taza Star wars", id: "st13", category: "Merch" , description: "Vasija pequeña de color blanco con el logo de un Trooper en medio"} ,
       {img:"../img/rex.jpg", title: "Figura Black Series", id: "st14", category: "Figuras" , description: "Figuras HotToys de rex y cody de Clone Wars - 1/6 scale collectible figure"} ,
       {img:"../img/funko.jpg", title: "Funko Hunter Star Wars", id: "st15", category: "Figuras" , description: "Funko pop de Hunter lider del equipo en la serie The Bad Batch"} ,
       {img:"../img/tmand.jpg", title: "Coleccionable", id: "st16", category: "Figuras" , description: "Figura HotToys del protagonista de The Mandalorian"} ,
       {img:"../img/comic.jpeg", title: "Comic Darth Maul", id:"st17", category: "Novelas" , description: "Historias del pasado del hijo de dathomir, 40 hojas"},
      ];

const ItemListContainer = ({greeting}) => {
  const [product, setProducts] = useState([]);
   const [singleProduct, setSingleProduct] = useState({});
   const idProduct ="5";

  //  const getProductos = new Promise((resolve,reject) => {
  //    setTimeout(() => {
  //      resolve(arreglo);
  //    }, 1000);
  // });
 
  const getProducts = fetch('https://fakestoreapi.com/products')




  useEffect(() => {
    getProducts
      .then((res) =>{
        return res.json();
      })
      .then((response) => {

        setProducts(response);
      })
      .catch((error) => {
        console.log(error)});
  }, []);


 
   return (
       <div>
        {greeting} 
        <ItemCount />
        {/* <div width="200" className="productos">
       <img alt={producto.title} src={producto.img} width="200"/>
       <h2>{producto.title}</h2>
       <h3>{producto.category}</h3>
       <h4>{producto.description}</h4>

    </div> */}
        <ItemList productos={product}/>
        
      </div>
   );
}; 

export default ItemListContainer;