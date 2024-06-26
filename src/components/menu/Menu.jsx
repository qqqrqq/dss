import React from "react";
import { Link } from 'react-router-dom';
import s from './Menu.module.css';
const Menu = () =>{
    return(
        <nav>
           <ul>
             <li><Link to="/"><p className={s.symbol}>&#x1F3E0;</p> <p>Главная</p></Link></li>
             <li><Link to="/page2"><p className={s.symbol}>&#127905;</p> <p>Играть</p></Link></li>
           </ul>
        </nav>
    )
}



export default Menu