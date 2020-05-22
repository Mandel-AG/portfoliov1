import React from 'react'
import './competences.css'
import {Animated} from "react-animated-css";
import ProgressBar from 'react-bootstrap/ProgressBar'



class Competences extends React.Component{

   
    render(){
        return(
                <Animated className='tout' animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
                    <div className='letoutcompetences'>
                            <div className='ensemblecompetences'>
                                    <span className='titrecompetences'><h3>Competences</h3></span>
                                    <div className='containercompetences'>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>HTML 5</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={90} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>CSS 3</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Javascript</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>React JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Node JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={60} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>MySQL</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={40} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>NoSQL</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={50} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Express JS</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={50} />
                                            </div>
                                        </div>

                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Git</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={70} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Bootstrap</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={80} />
                                            </div>
                                        </div>


                                        <div className='containtercerclecompetences'>
                                            <div id='cerclechaquecommpetence'>
                                                <span>Wordpress</span>
                                            </div>
                                            <div className='progress-bar'>
                                            <ProgressBar now={60} />
                                            </div>
                                        </div>

                                    </div>
                            </div>

                            <div className='ensemblesoftskill'>
                                    <span className='titrecompetences'><h3>Soft Skill</h3></span>
                                <div className='containersoftskill'>
                                    <div id='cerclechaquecommpetence'>Autonomie</div>
                                    <div id='cerclechaquecommpetence'>Perseverance</div>
                                    <div id='cerclechaquecommpetence'>Passion</div>
                                    <div id='cerclechaquecommpetence'>Respect</div>
                                    <div id='cerclechaquecommpetence'>Travail d'equipe</div>
                                    <div id='cerclechaquecommpetence'>Adaptabilite</div>
                                    <div id='cerclechaquecommpetence'>Creativite</div>
                                    <div id='cerclechaquecommpetence'>Polyvalence</div>
                                </div>
                            </div>
                    </div>
                </Animated>     
        )
    }
}

export default Competences