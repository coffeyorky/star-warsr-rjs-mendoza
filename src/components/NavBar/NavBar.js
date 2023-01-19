import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <img alt="jediOrder" src="./img/jediOrder.png" />
      </div>
      <div>
        <ul className="menu">
          <li>
            <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/men´s clothing"
            >
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/women´s clothing"
            >
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active" : "inactive")}
              to="/category/electronic"
            >
              Joyeria
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>

  );
};

export default NavBar;
