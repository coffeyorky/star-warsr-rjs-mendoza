import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import "../NavBar/style.css"

const CartWidget = () => {
  return (
    <div>
      <div>
      <FontAwesomeIcon className='icon' icon= {faCartShopping} />
      <Badge bg="secondary">0</Badge>
      </div>


    </div>
  );
};

export default CartWidget;