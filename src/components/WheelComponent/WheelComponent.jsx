import {Wheel} from './spin-wheel-main/dist/spin-wheel-esm.js';
import { React, useRef, useEffect } from 'react';
import {AlignText} from './spin-wheel-main/src/constants.js';
import overlayImg from '../../img/svg.svg'
import tonImg from '../../img/ton_symbol.svg'
import './WheelComponent.css'


const WheelComponent = () =>{
  const wheelRef = useRef(null);
  const wheelInstanceRef = useRef(null);
 
  useEffect(() => {
    
    const props = {
      items: [
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
        { image: tonImg,
          imageRadius: 0.6,
          imageScale: 2.2,
        },
  
      
      ],
      radius: 0.84,
  
      itemLabelRadiusMax: 0.35,
      itemLabelRotation: 180,
      itemLabelAlign: AlignText.left,
     
      itemLabelBaselineOffset: -0.07,
      itemLabelFont: 'Amatic SC',
      itemLabelFontSizeMax: 55,
      itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062' ],
      rotationSpeedMax: 500,
      rotationResistance: -100,
      lineWidth: 1,
      lineColor: '#fff',
      overlayImage:overlayImg,
    };

   

 
      wheelInstanceRef.current = new Wheel(wheelRef.current, props);
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