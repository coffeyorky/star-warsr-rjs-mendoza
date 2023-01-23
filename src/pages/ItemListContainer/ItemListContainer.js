import ItemCount from "../../components/ItemConunt/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

//  const arreglo = [
//         {img:"../img/thbbr.jpg", title: "Remera Bad batch", id: "st12", category: "Ropa", description:"Remera de talla universal con estampado de los personajes de la serie The Bad Batch"} ,
//         {img:"../img/taza.png", title: "Taza Star wars", id: "st13", category: "Merch" , description: "Vasija pequeña de color blanco con el logo de un Trooper en medio"} ,
//         {img:"../img/rex.jpg", title: "Figura Black Series", id: "st14", category: "Figuras" , description: "Figuras HotToys de rex y cody de Clone Wars - 1/6 scale collectible figure"} ,
//         {img:"../img/funko.jpg", title: "Funko Hunter Star Wars", id: "st15", category: "Figuras" , description: "Funko pop de Hunter lider del equipo en la serie The Bad Batch"} ,
//         {img:"../img/tmand.jpg", title: "Coleccionable", id: "st16", category: "Figuras" , description: "Figura HotToys del protagonista de The Mandalorian"} ,
//         {img:"../img/comic.jpeg", title: "Comic Darth Maul", id:"st17", category: "Novelas" , description: "Historias del pasado del hijo de dathomir, 40 hojas"},
//        ];

  const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {category} = useParams();

 
   const getProducts = fetch( "https://63ccc03fea8551541524536e.mockapi.io/api/st3/swars", {
    method: "GET",
    headers: {
      "content-type": "json",
    },
  });


  useEffect(() => {
    getProducts
    .then((resp) => {
      return resp.json();
    })
     .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error)});
  }, []);

   useEffect(() => {
     if (category){
      const removeCharacters = category.includes("%20")
      ? category.replace("%20","")
      : category; 
      const filterProducts = products.filter((product) => {
         return product.category === removeCharacters
     });
       setFilteredProducts(filterProducts);
     
     }
      
   }, [category]);
 
   return (
       <div>
        {greeting} 
        <ItemCount />
        <ItemList productos={category ? filteredProducts : products}/>
        <div></div>
      </div>
   );
}; 

export default ItemListContainer;