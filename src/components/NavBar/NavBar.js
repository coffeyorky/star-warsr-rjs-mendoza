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
        <CartWidget />
      </div>
    </div>

  );
};

// className={({isActive}) => (isActive ? "active" : "inactive")}

        // <ul className="menu">
        //   <li><NavLink to="/">Inicio</NavLink></li>
        //   <li><NavLink to="/category/ropa">Ropa</NavLink></li>
        //   <li><NavLink to="/category/figuras">Figuras</NavLink></li>
        //   <li><NavLink to="/category/novelas">Novelas</NavLink></li>
        //   <li><NavLink to="/category/merch">Merch</NavLink></li>
        
        // </ul>

export default NavBar;
