import React from "react";
import WheelMain from "../../WheelMain/WheelMain.jsx";
import './MainPage.css'
const tg = window.Telegram.WebApp
const MainPage = () =>{
    const user = tg?.initDataUnsafe?.user
    
    return(
        <div className="mainpage">
            <div className="data">
            {user}
            </div>
           
            <WheelMain/>
        </div>
    )
}



export default MainPage