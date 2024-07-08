import React, { useEffect } from "react";
import './PlayPages.css'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const PlayPages = (props) =>{
    const location = useLocation()
    
    useEffect(()=>{
     props.setHeader(true)

    
    },[location, props ])
    return(
        <div className="playpages">
            <div className="playpages-item">
                <Link className="room_btn" to="/room">Join room</Link>
            </div>
        </div>
    )
}



export default PlayPages