import React, { Component } from 'react'
import './projet.css'
import {Animated} from 'react-animated-css'
import {default as Tab} from './listeprojets'


export default class Projets extends Component{ 

    render(){
        const projects = Tab.map(project => (
            <div className='eachProject' key={project.id}>
                <div className='cercleProjet'>
                    <img src={require(`${project.img}`)} alt={project.nom}/>
                </div>
                <ul className='divdescription'>
                    <li><span>Nom : </span> {project.nom}</li>
                    <li><span>Description : </span> {project.description}</li>
                    <li><span>Technos : </span> {project.technologie}</li>
                    {(project.visite) ? (<p><span>Visitez</span></p>) : (null)}    
                </ul>
            </div>
        ))

            return(

                <Animated  animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>      
                    <div className='title ProjectTitle'>
                        <h2>Projets</h2>
                    </div>
                    
                    <div className='containerProjet'>
                    {projects}            
                    </div>
                </Animated>
            )
    }
}

