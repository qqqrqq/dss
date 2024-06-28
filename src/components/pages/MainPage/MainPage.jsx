import React from "react";
import WheelMain from "../../WheelMain/WheelMain.jsx";
import './MainPage.css'
const tg = window.Telegram.WebApp
const MainPage = () =>{
    console.log(tg.initDataUnsafe)
  
    return(
        <div className="mainpage">
            <div className="data">
             {tg.initDataUnsafe.user.first_name}
            </div>
           
            <WheelMain/>
        </div>
    )
}



export default MainPage