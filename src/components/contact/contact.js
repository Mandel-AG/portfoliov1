import React from 'react'
import './contact.css'
import {Animated} from 'react-animated-css'
import{ Linkedin, Mail} from './animationsContact'




class Contact extends React.Component{

    

    handleClick = (e) =>{
         window.location.href = e;
    }

    render(){

        return(
     
                <Animated className='tout' animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>           
                    <div className='containertitre'>
                        <h2>Contact</h2>
                        <h3>N'hesitez pas a me contacter</h3>
                    </div>
                
                    <div className='containerContact'>

                        <div className='chaqueContact'>
                            <div className='cercleContact'><Mail/></div>
                            <p>Mail</p>
                        </div>
            

                        <div className='chaqueContact' onClick={()=>this.handleClick('https://www.linkedin.com/in/mandel-agbovon-9309a0195/')} >
                            <div className='cercleContact'><Linkedin/></div>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </Animated>
        )
    }
}
export default Contact