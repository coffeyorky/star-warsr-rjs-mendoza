import "./style.css"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailConteiner = () => {
   const [singleProduct, setSingleProduct] = useState({});
   const { id } = useParams();


const getProduct = () => {
  const dataSw = getFirestore();
  const querySnapshot = doc(dataSw, "items", id);

  getDoc(querySnapshot)
  .then((response) => {
    setSingleProduct({ id: response.id, ...response.data() });
  })
  .catch((error) => {
    console.log(error);
  });
}

     useEffect(() => {
       getProduct();
     }, []);

    
  return (
    <div>

      <ItemDetail producto={singleProduct} />
      <Link to="/">Volver</Link>
    </div>
    
  );
};

export default ItemDetailConteiner;
