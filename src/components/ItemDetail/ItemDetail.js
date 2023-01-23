

const ItemDetail = ({producto}) => {
  return (
    <div width="200" className="productos">

       <img alt={producto.id} src={producto.img} width="200"/>
       <h2>{producto.title}</h2>
       <h3>{producto.category}</h3>
       <h4>{producto.description}</h4>
       
    </div>
    
  )
}

export default ItemDetail