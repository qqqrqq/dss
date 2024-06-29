import React, { useEffect } from "react";
import './PlayPages.css'
import { useLocation } from "react-router-dom";

const PlayPages = (props) =>{
    const location = useLocation()
    
    useEffect(()=>{
     props.setHeader(true)
    },[location])
    return(
        <div className="playpages">
            <div className="playpages-item">
                
            </div>
        </div>
    )
}



export default PlayPages