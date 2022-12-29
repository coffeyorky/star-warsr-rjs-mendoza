import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <div className="cart-widget">
    <FontAwesomeIcon icon= {faCartShopping} />
    <div className="qty-display">0</div>
    <Badge pill bg="success">
       Carrito
      </Badge>

    </div>
  );
};

export default CartWidget;