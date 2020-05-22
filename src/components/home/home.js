import React from 'react'
import './home.scss'
import {Animated} from "react-animated-css";



class Home extends React.Component{

    render(){

        return(
            <Animated  className='tout' animationIn="bounceInDown" animationOut="bounceOutLeft" isVisible={true}>
                <div className='letouthome'>
                    <div className='titre'>
                        <h1>AGBOVON Mandel</h1>
                    </div>

                    <div className='divsoustitre'>
                        <p>Developpeur Front-end</p>
                    </div>
                    
                    <div className='containertext'>
                        <div className='textepresentation'>Mandel, 28ans  et anciennement dans le domaine de la logistique. 
                            J’ai auparavant travaille dans plusiuers secteurs (logistique,vente, 
                            management, restauration). En 2019, j’ai decide de me tourner vers un 
                            qui me plairait plus. Quelques mois , j’ai entrepris une reconversion 
                            professionnellement dans ce domaine qui m’interessait fortement et qui aujourd’hui me 
                            passionne. J’ai integre l’organisme simplon dans un formation developpeur web et 
                            web mobile et me voici.
                        </div>
                    </div>
                </div>
            </Animated>
        )
    }
}

export default Home