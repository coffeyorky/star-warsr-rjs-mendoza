import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const getProducts = () => {
    const dataSw = getFirestore();
    const querySnapshot = collection(dataSw, "items");

    if (category) {
      const newConfiguration = query(
        querySnapshot,
        where("categoryid", "==", category)
      );
      getDocs(newConfiguration)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);


  return (
    <div>
      {loading ? <Loading /> : <ItemList productos={products} />}

      <div></div>
    </div>
  );
};

export default ItemListContainer;
