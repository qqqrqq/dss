import React from "react";
import WheelMain from "../../WheelMain/WheelMain.jsx";
import './MainPage.css'
const tg = window.Telegram.WebApp
const MainPage = () =>{
    
    return(
        <div className="mainpage">
            {tg?.version}
            {tg?.platform}
            {tg?.initData}
            <WheelMain/>
        </div>
    )
}



export default MainPage