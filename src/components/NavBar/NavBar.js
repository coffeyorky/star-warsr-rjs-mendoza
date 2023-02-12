import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div>
      <Link to="/"><img alt="jediOrder" src="./img/jediOrder.png" /></Link>
        
      </div>
      <div>
         <ul className="menu">
          <li>
            <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/ropa"
            >
              Ropa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/figuras"
            >
              Figuras
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/novelas"
            >
              Novelas
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/merch"
            >
             Merch
            </NavLink>
          </li>

        </ul> 
      </div>
      <div>
        <Link to="/cart">
          <CartWidget />
        </Link>

      </div>
    </div>

  );
};


export default NavBar;
