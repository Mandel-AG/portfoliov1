import Lottie from 'react-lottie';
import React from 'react'
import  animationData  from './animationsContact/linkedin.json'

export default function Linkedin (props){
    return(
        <Lottie height={props.size} width={props.size} options={{
            loop: true,
            autoplay: true, 
            animationData,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
            }}}>
        </Lottie>
    )
}