import React, { useEffect } from "react";
import WheelMain from "../../WheelMain/WheelMain.jsx";
import './MainPage.css'
import defaultProfPic from '../../../img/proficon.png'
import { useLocation } from "react-router-dom";
const tg = window.Telegram.WebApp
const MainPage = (props) =>{
    const location = useLocation()
   useEffect(()=>{
       props.setHeader(false)
   },[location, props])
  
    return(
        <div className="mainpage">
            <div className="mainpage_info-user">
            <img src={defaultProfPic} alt="" />
             {tg?.initDataUnsafe?.user?.first_name || 'username'}
             <p className="mainpage_info-amount">40</p>
            </div>
           
            <WheelMain/>
        </div>
    )
}



export default MainPage