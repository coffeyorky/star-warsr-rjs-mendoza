import CartWidget from "./CartWidget";
import jediOrder from "../img/jediOrder.png";

const NavBar = ({menu}) => {

  return (  
  <header> 
    <div>
    <img src={jediOrder} alt= "logo"/>
    </div> 
    <div>{menu}</div>
    <div>
      <nav>
        <ul>
          <li><a href="/index">Inicio</a></li>
          <li><a href="/index">Ropa</a></li>
          <li><a href="/index">Peliculas</a></li>
          <li><a href="/index">Novelas</a></li>
          <li><a href="/index">Videojuegos</a></li>
          <li><a href="/index">Merch</a></li>
        </ul>
         </nav>
    </div>
    

    <CartWidget />
    </header>
  )
}

export default NavBar
