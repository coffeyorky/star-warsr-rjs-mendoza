import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailConteiner = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const idProduct = "1";
  const id = useParams();
  console.log(id);

  const getProduct = fetch("https://fakestoreapi.com/products/" + { id } + "", {
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
  });

  return (
    <div>
      <ItemDetail producto={singleProduct} />
      <Link to="/">Volver</Link>
    </div>
  );
};

export default ItemDetailConteiner;
