import React, { Component } from 'react'
import './formations.css'
import {Animated} from 'react-animated-css'


export default class Formations extends Component{

    render(){
        return(
                <Animated  animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>

                    <div className='title careerTitle'>
                        <h2>Formations</h2>
                    </div>
                    <div className='educationContainer'> 
                        <div className='ensembleformation'>
                            <span className='educationTitle'><h4>Parcours</h4></span>
                            <div className='containerformation'>


                            <div className="containerFormationEach">
                                <p id='containerFormationTitre'>SupDeWeb - Bachelor Développeur web</p>
                                    <p id='containerFormationText'>
                                        Préparation d'un formation en alternance autour des langagues et 
                                        frameworks Javascript et PHP. 
                                    
                                    </p>
                                </div>



                            <div className="containerFormationEach">

                                    <p id='containerFormationTitre'>Simplon - Titre professionnel</p>
                                    <p id='containerFormationText'>
                                        Formation intensive en pedagogie active et centree sur 
                                        la pratique(environ 70%
                                        de pratique). Des projets tout au long de l'annee et un stage en entreprise.
                                    </p>
                            </div>
                            </div>
                        </div>

                        
                        <div className='ensembelcertifications'>
                            <span className='educationTitle'><h4>Certifications</h4></span>
                            <div className='certificationContainer'>
                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Opquast</h5>
                                    </span>
                                    <p>Maitrise qualité web. Formation certifiante sur les bonnes pratiques considérées 
                                        comme indispensables pour la qualité du site.
                                    </p>
                                </div>

                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Certification Agilité</h5>
                                    </span>
                                    <p>Cours et examen sur la certification agile.</p>
                                </div>

                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Freeformers</h5>
                                        </span>
                                    <p>Programme de développement des compétences digitales sur divers themes(UI, UX, cybersécurite, réferencements etc.).</p>
                                </div>
                        </div>
                    </div>   
                </div>
            </Animated>
                    
        )
    }
}

