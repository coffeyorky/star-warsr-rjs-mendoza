

const ItemDetail = ({producto}) => {
  return (
    <div width="200" className="productos">
        <ul className="dirigir">
      
       <img alt={producto.title} src={producto.img} width="200"/>
       <h2>{producto.title}</h2>
       <h3>{producto.category}</h3>
       <h4>{producto.description}</h4>
        </ul>
    </div>
    
  )
}

export default ItemDetail