import React from "react";
import { Link } from 'react-router-dom';
import  './Menu.css';
const Menu = (props) =>{
  console.log(props)
    return(
        <nav>
           <ul>
             <li><Link to="/" ><p className="symbol">&#x1F3E0;</p> <p>Главная</p></Link></li>
             <li><Link to="/page2"><p className="symbol">&#127905;</p> <p>Играть</p></Link></li>
           </ul>
        </nav>
    )
}



export default Menu