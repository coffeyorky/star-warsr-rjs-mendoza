import "./Item.css";

const Item = ({producto}) => {
  return (
    <ul className="dirigir">
      <li width="200" className="productos">
       <img src={producto.img} width="200"/>
       <h2>{producto.title}</h2>
       <h3>{producto.category}</h3>
       <h4>{producto.description}</h4>
    </li>
    </ul>
    );
};

export default Item;