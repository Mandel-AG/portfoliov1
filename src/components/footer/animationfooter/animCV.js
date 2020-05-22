import Lottie from 'react-lottie';
import React from 'react'
import  animationData  from './cv.json'

export default function AnimCv (props){
    return(
        <Lottie height={props.size} width={props.size} options={{
            loop:  props.play,
            autoplay: true, 
            animationData,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
            }}}>
        </Lottie>
    )
}