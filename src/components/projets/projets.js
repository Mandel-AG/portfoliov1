import React, { useState } from 'react'
import './projet.css'
import {Animated} from 'react-animated-css'
import {default as Tab} from './listeprojets'


export default function Projets () { 
    const [selectedProject, setSelectedProject] = useState([])

    const handleClick = (e,link) =>{
        e.preventDefault()
        window.open(link);
    }


    const getSelectedProject = (id) => {
        const selectedproject = Tab.filter(element => element.id === id);
        setSelectedProject(selectedproject)
    }



    const projectsImg = Tab.map(project => (
        <div className='list__eachProject' key={project.id} onMouseOver={() => getSelectedProject(project.id)} onClick={() => getSelectedProject(project.id)} >
            <div className='list__cercleProjet'>
                <img src={require(`${project.img}`)} alt={project.nom}/>
            </div>
            {/* <ul className='divdescription'> */}
                {/* <li><span>Nom : </span> {project.nom}</li> */}
                {/* <li><span>Description : </span> {project.description}</li> */}
                {/* <li><span>Technos : </span> {project.technologie}</li> */}
                {/* {(project.visite) ? (<p><span onClick={(e)=>handleClick(e,project.lien)}>Visitez</span ></p>) : <p>Hébergement du projet à venir.</p>}     */}
            {/* </ul> */}
        </div>
    ))


    


    const projectDetails = selectedProject.map(project => (
        <div className='eachProjectDetails' key={project.id} >
            <div className='detail__cercleProjet'>
                <img src={require(`${project.img}`)} alt={project.nom}/>
            </div>
            <ul className='divdescription'>
                <li><span>Nom : </span> {project.nom}</li>
                <li><span>Description : </span> {project.description}</li>
                <li><span>Technos : </span> {project.technologie}</li>
                {(project.visite) ? (<p ><span id='visitez'  onClick={(e)=>handleClick(e,project.lien)}>Visitez</span ></p>) : <p>Hébergement du projet à venir.</p>}    
            </ul>
        </div>
    ))




    return(
    

        <Animated  animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>      
            <div className='title ProjectTitle'>
                <h2>Projets</h2>
            </div>

            <div className='containerProjet'>

            <div className='project__list'>
                {projectsImg}            
            </div>

            <div className='project__details'>
                {projectDetails}
            </div>
            
            </div>
        </Animated>
    )
}

