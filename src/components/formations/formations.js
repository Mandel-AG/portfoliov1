import React, { Component } from 'react'
import './formations.css'
import {Animated} from 'react-animated-css'


export default class Formations extends Component{

    render(){
        return(
                <Animated className='tout' animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
                    <div className='letoutformation'> 
                        <div className='ensembleformation'>
                            <span className='titreformation'><h3>Formations</h3></span>
                            <div className='containerformation'>
                                    <p id='simplontitre'>Simplon - Titre professionnel</p>
                                    <p id='simplontext'>
                                        Formation intensive en pedagogie active et centree sur 
                                        la pratique(environ 70%
                                        de pratique). Des projets tout au long de l'annee et un stage en entreprise.
                                    </p>
                            </div>
                        </div>

                        
                        <div className='ensembelcertifications'>
                            <span className='titreformation'><h3>Certifications</h3></span>
                            <div className='scroll'>
                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Opquast</h5>
                                    </span>
                                    <p>Maitrise qualite web. Formation certifiante sur les bonnes pratiques considérées 
                                        comme indispensables pour la qualité du site 
                                    </p>
                                </div>

                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Certification Agile</h5>
                                    </span>
                                    <p>Cours et examen sur la certification agile.</p>
                                </div>

                                <div id='containerchaquecertif'>
                                    <span id='cerclechaquecertification'>
                                        <h5>Freeformers</h5>
                                        </span>
                                    <p>Programme de developpement des competences digitales sur diverses themes(UI, UX, cybersecurite, referencements etc.).</p>
                                </div>
                        </div>
                    </div>   
                </div>
            </Animated>
                    
        )
    }
}

