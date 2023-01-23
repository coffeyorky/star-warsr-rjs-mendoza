import Item from "../Item/Item";
import { Link } from "react-router-dom";

const Itemlist = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto) => (
        <Link key={producto.id} to={"item/"+[producto.id]}>
          <Item producto={producto} />
        </Link>
      ))}
    </ul>
  );
};
// {"item/"+[producto.id]}

export default Itemlist;
