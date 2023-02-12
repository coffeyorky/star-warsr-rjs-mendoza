import "./Item.css";

const Item = ({producto}) => {
  return (
    <ul>
      <li width="200" className="productos">
       <img alt={producto.title} src={producto.imageid} width="200"/>
       <h2>{producto.title}</h2>
       <h3>{producto.categoryid}</h3>
       <h4>${producto.price}</h4>
    </li>
    </ul>
    );
};

export default Item;