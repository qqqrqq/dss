import {Wheel} from './spin-wheel-main/dist/spin-wheel-esm.js';
import { React, useRef, useEffect } from 'react';

import './WheelComponent.css'


const WheelComponent = (props) =>{
  const wheelRef = useRef(null);
  const wheelInstanceRef = useRef(null);
 
  useEffect(() => {
    
 

   

 
      wheelInstanceRef.current = new Wheel(wheelRef.current, props.props);
      wheelInstanceRef.current.rotationResistance = 0
  
      wheelInstanceRef.current.spin(10)

  }, []);

  return (
    <div className='mainwheel_container'>
      <div ref={wheelRef} className="wheel-container"></div>
    
    </div>
  );
}

export default WheelComponent