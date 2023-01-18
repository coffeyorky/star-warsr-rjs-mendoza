import "./style.css"
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (   
    <div className="nav"> 
    <div>
      <img alt= "jediOrder" src="./img/jediOrder.png"/>
    </div> 
    <div>
        <ul className="menu">
          <li><a href="/index">Inicio</a></li>
          <li><a href="/index">Ropa</a></li>
          <li><a href="/index">Novelas</a></li>
          <li><a href="/index">Figuras</a></li>
          <li><a href="/index">Merch</a></li>
        </ul>
    </div>
    <div>
      <CartWidget />
    </div>
    
    </div>

    

  )
}

export default NavBar
