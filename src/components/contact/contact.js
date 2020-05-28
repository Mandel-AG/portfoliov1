import React from 'react'
import './contact.css'
import {Animated} from 'react-animated-css'
import{ Linkedin, Mail} from './animationsContact'


class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            mail : false
        }
    }
    
    displayMail = () =>{
        const mail = this.state.mail
        this.setState({
            mail: !mail
        })

    }

    handleClick = (e) =>{
         window.location.href = e;
    }

    render(){

        return(
     
                <Animated  animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>           
                    <div className='title contactTitle'>
                        <h2>Contact</h2>
                    </div>
                    <div className='contactText'>
                        <h3>N'hésitez pas à me contacter</h3>
                    </div>
                
                    <div className='containerContact'>
                
                        <div className='chaqueContact' onClick={ () => this.displayMail()} >
                            <div className='cercleContact'><Mail/></div>
                            <p>Mail</p>
                            { (this.state.mail) ? (
                            <Animated className='animation'  
                                animationIn="fadeInLeft"
                                animationOut="fadeOutLeft" 
                                isVisible={true}>
                                    <span>a.mandel06@gmail.com</span>
                            </Animated>) 
                            : (null) }
                        </div>
            

                        <div className='chaqueContact' onClick={()=>this.handleClick('https://www.linkedin.com/in/mandel-agbovon-9309a0195/')} >
                            <div className='cercleContact'><Linkedin/></div>
                            <p>Linkedin</p>
                            { (this.state.mail) ? (<span> </span>) : (null) }
                            
                        </div>
                    </div>
                </Animated>
        )
    }
}
export default Contact