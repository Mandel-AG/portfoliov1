import Lottie from 'react-lottie';
import React from 'react'
import  animationData  from './animationsContact/letter.json'

export default function Mail (props){
    return(
        <Lottie height={props.size} width={props.size} options={{
            loop: true,
            autoplay: props.play, 
            animationData,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
            }}}>
        </Lottie>
    )
}