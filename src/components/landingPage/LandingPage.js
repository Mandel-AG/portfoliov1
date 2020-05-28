import React from 'react';
import Typical from 'react-typical'
import './landing.css'


export default function LandingPage (props){

   (function typing() {
      setTimeout(() => {
         props.history.push('/home')
      }, 3000)}())

    return(
       <div className='landingPage'>
         <Typical
          steps={['Bienvenu sur mon portfolio.',1000]}
          loop={2}
          wrapper="h2"
        />
       </div>
        

    )
}