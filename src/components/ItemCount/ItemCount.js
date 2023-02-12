import "./style.css";

const ItemCount = ({contador, acValor, stock}) => {


  const onAdd = () => {
    if (stock === contador){
      return;
    }
    acValor(contador + 1);

  };
  const restar =() => {
    if(contador === 0) {
      return
    }
    acValor(contador - 1);
  };

  return (
    <div className='cont'>
      <div className="count">
      <button onClick={restar}>-</button>
      <div>
        <span>{contador}</span>
      </div>
      <button onClick={onAdd}>+</button>        
      </div>

    </div>
  )
}

export default ItemCount