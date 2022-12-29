import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <div>
      <div>
      <FontAwesomeIcon icon= {faCartShopping} />
      <Badge bg="secondary">0</Badge>
      </div>
      <Badge pill bg="success">
       Carrito
      </Badge>

    </div>
  );
};

export default CartWidget;