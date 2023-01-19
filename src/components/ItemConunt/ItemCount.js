import "./style.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
  const [contador, setContador] =useState(0);
  const stock = 10;
  const sumar = () => {
    if (stock === contador){
      return;
    }
    setContador(contador + 1);
  };
  const restar =() => {
    if(contador === 0) {
      return
    }
    setContador(contador - 1);
  };

  return (
    <div className='cont'>
      <div className="count">
      <button onClick={restar}>-</button>
      <div>
        <span>{contador}</span>
      </div>
      <button onClick={sumar}>+</button>        
      </div>

      <div>
      <Button variant="light">Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default ItemCount