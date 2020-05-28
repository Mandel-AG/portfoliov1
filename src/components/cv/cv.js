import React from 'react';
import {Animated} from 'react-animated-css';
import './cv.css';



export default function Cv (props){

    return(
      <Animated  animationIn="fadeInUp" animationOut="fadeOutLeft" isVisible={true}>      
          <div className="d-flex justify-content-center">
            <div className='boxCV'>
            <img src={require('./cvmandel.png')} alt='cv'  ></img>


            </div>
          </div>
        </Animated>


    )
}