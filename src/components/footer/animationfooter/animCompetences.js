import Lottie from 'react-lottie';
import React from 'react'
import  animationData  from './muscle.json'

export default function AnimCompetences (props){
    return(
        <Lottie height={props.size} width={props.size} options={{
            loop: props.play,
            autoplay: true, 
            animationData,
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
            }}}>
        </Lottie>
    )
}


