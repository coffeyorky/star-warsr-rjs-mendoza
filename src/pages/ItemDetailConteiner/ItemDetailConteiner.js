import "./style.css"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailConteiner = () => {
   const [singleProduct, setSingleProduct] = useState({});
   const { id } = useParams();
   console.log(id);



 const getProduct = fetch( "https://63ccc03fea8551541524536e.mockapi.io/api/st3/swars/"+[id]+"" , {
   method: "GET",
 });

     useEffect(() => {
       getProduct
       .then((resp) => {
        return resp.json();
       })
         .then((data) => {
           setSingleProduct(data);
         })
         .catch((error) => {
           console.log(error);
         });
     }, []);

    
  return (
    <div>

      <ItemDetail producto={singleProduct} />
      <Link to="/">Volver</Link>
    </div>
    
  );
};

export default ItemDetailConteiner;
