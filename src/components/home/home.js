import React from 'react'
import './home.css'
import {Animated} from "react-animated-css";



class Home extends React.Component{

    render(){

        return(
            <Animated  className='homeContainer' animationIn="zoomIn" animationOut="bounceOutLeft" isVisible={true}>
                    <div className='title homeTitle'>
                        <h2>Qui suis-je ?</h2>
                    </div>
                    <div className='name'>
                        <h1>AGBOVON Mandel</h1>
                    </div>

                    <div className='career'>
                        <p>Développeur Front-end</p>
                    </div>
                    
                    <div className='textContainer'>
                        <div className='introduction'>Mandel, 28ans  et anciennement dans le domaine de la logistique. 
                            J’ai auparavant travaillé dans plusieurs secteurs (logistique, vente, 
                            management, restauration). En 2019, j’ai decidé de me tourner vers un métier
                            qui me plairait plus. J'ai fais des recherches et étudié de mon côté puis j’ai finalement entrepris une reconversion 
                            professionnelle dans ce domaine qui m’interesse fortement et qui aujourd’hui me 
                            passionne. J’ai integré l’organisme Simplon pour une formation développeur web et 
                            web mobile et je préprare maintenant une alternance en Bachelor à l'école SupDeWeb.
                        </div>
                    </div>
            </Animated>
        )
    }
}

export default Home