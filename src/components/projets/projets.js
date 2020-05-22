import React from 'react'
import './projet.css'
import {Animated} from 'react-animated-css'
import {default as Tab} from './listeprojets'


export default function Projets (props){ 
    
    const projects = Tab.map(project => (
        <div className='chaqueProjet' key={project.id}>
            <div className='cercleProjet'>
                <img src={require(`${project.img}`)} alt={project.nom}/>
            </div>
            <div className='divdescription'>
                <p><span>Nom : </span> {project.nom}</p>
                <p><span>Description : </span> {project.description}</p>
                <p><span>Technos : </span> {project.technologie}</p>
            </div>
        </div>
    ))

    return(

        <Animated className='tout' animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>      
            <div className='containertitre'>
                <h2>Projets</h2>
                <h3>Decouvrez ici mes projets</h3>
            </div>
            
            <div className='containerProjet'>
            {projects}            
            </div>
        </Animated>
    )
}

