import React from "react";
//import { Link } from 'react-router-dom';
import './Header.css';
import profPic from  '../../img/proficon.png'
import tonSymbol from  '../../img/ton_symbol.svg'
const Header = () =>{
    return(
        <header>
            <div className="header_info">
                <img className="header_profile_pic" src={profPic} alt="" />
                <p>username</p>
            </div>
            <div className='wallet_header_info'>
                <p>40</p>
                <img src={tonSymbol} alt="" />
            </div>
        </header>
    )
}



export default Header