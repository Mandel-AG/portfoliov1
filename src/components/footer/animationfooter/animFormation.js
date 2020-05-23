import Lottie from 'react-lottie';
import React from 'react'
import  animationData  from './formations.json'

export default function AnimFormations (props){
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