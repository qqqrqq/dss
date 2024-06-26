import React from "react";

import s from './WheelMain.module.css';
import WheelComponent from "../WheelComponent/WheelComponent.jsx";
import {AlignText} from '../WheelComponent/spin-wheel-main/src/constants.js';
import overlayImg from '../../img/svg.svg'
import tonImg from '../../img/ton_symbol.svg'
const WheelMain = () =>{
 
    const wheelMainConfig = {
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
    return(
        <div className='container'>
      
            <WheelComponent props = {wheelMainConfig} />
        </div>
    )
}

export default WheelMain