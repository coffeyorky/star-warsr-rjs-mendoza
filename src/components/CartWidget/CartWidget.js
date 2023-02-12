import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "../NavBar/style.css"

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const [ total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
    cart?.reduce((prev, curr) =>{
    console.log(prev, curr);
    return prev  + curr.quantity;
    }, 0)  
    )
  }, [cart]);

  return (
    <div>
      <div>
        {total}
      <FontAwesomeIcon className='icon' icon= {faCartShopping} />

      </div>


    </div>
  );
};

export default CartWidget;