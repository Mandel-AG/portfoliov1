import React from 'react'
import './competences.css'
import {Animated} from "react-animated-css";
import ProgressBar from 'react-bootstrap/ProgressBar'



class Competences extends React.Component{

   
    render(){
        return(
                <Animated className='skillContainer' animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
                    
                    <div className=' title skillTitle'>
                        <h2> Compétences </h2>
                    </div>

                    <div className='containerAll'>
                            <div className='techSkillContainer'>
                                    <span className='category'><h4>Technos</h4></span>
                                    <div className='containercompetences'>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>HTML 5</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={90} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>CSS 3</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>React JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>Node JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={60} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>MySQL</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={40} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>NoSQL</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={50} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>Express JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={50} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>Git</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>Bootstrap</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={80} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecompetence'>
                                                <span>Wordpress</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={60} />
                                            </div>
                                        </div>

                                    </div>
                            </div>

                            <div className='softSkill'>
                                    <span className='category'><h4>Soft Skill</h4></span>
                                <div className='containersoftskill'>
                                    <div id='cerclechaquecompetence'>Autonomie</div>
                                    <div id='cerclechaquecompetence'>Perséve-<br></br>rance</div>
                                    <div id='cerclechaquecompetence'>Passion</div>
                                    <div id='cerclechaquecompetence'>Respect</div>
                                    <div id='cerclechaquecompetence'>Travail <br></br>d'équipe</div>
                                    <div id='cerclechaquecompetence'>Adapta-<br></br>bilité</div>
                                    <div id='cerclechaquecompetence'>Créativite</div>
                                    <div id='cerclechaquecompetence'>Polyvalence</div>
                                </div>
                            </div>
                    </div>
                </Animated>     
        )
    }
}

export default Competences