import React from "react";
import WheelMain from "../../WheelMain/WheelMain.jsx";
import './MainPage.css'
import defaultProfPic from '../../../img/proficon.png'
const tg = window.Telegram.WebApp
const MainPage = () =>{
    console.log(tg.initDataUnsafe)
  
    return(
        <div className="mainpage">
            <div className="mainpage_info-user">
        <img src={defaultProfPic} alt="" />
             {tg?.initDataUnsafe?.user?.first_name || 'username'}
            </div>
           
            <WheelMain/>
        </div>
    )
}



export default MainPage