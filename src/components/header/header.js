import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import {AnimContact,AnimFormations, AnimCompetences , AnimHome, AnimProjets, AnimCv} from '../footer/animationfooter'



export default class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            sizeCompetences:90,
            sizeContact:40,
            sizeCv:40,
            sizeFormations:100,
            sizeHome:40,
            sizeProjets:70,
            autoplay:false
        }
    }

    render(){
        return(
            <>
                <div className='containermenu containermenuheader'>
                    <div className='nommenu cadrepresentations'>
                        <Link className='cercleimage presentation' to="/" > 
                            <AnimHome size={this.state.sizeHome} play={this.state.autoplay}/> 
                        </Link>
                        <span>Presentation</span>
                    </div>

                    <div className='nommenu cadrecompetences'>
                        <Link className='cercleimage competences' to="/competences" >
                            <AnimCompetences size={this.state.sizeCompetences} play={this.state.autoplay}/>
                        </Link>
                        <span>Competences</span>
                    </div>

                    <div className='nommenu cadreformations'>
                        <Link className='cercleimage formation' to="/formations"><span className='border'></span>
                            <AnimFormations size={this.state.sizeFormations} play={this.state.autoplay}/>
                        </Link>
                        <span>formations</span>
                        </div>

                    <div className='nommenu cadreprojets'>
                        <Link className='cercleimage projets' to="/projets"><span className='border'></span>
                            <AnimProjets size={this.state.sizeProjets} play={this.state.autoplay}/>
                        </Link>
                        <span>Projets</span>
                    </div>

                    <div className='nommenu cadrecv'>
                        <Link className='cercleimage cv' to="/CV"><span className='border'></span>
                        <AnimCv size={this.state.sizeCv} play={this.state.autoplay}/>
                        </Link>
                        <span>Cv</span>
                    </div>

                    <div className='nommenu cadrecontact'>
                        <Link className='cercleimage contact' to="/contact"><span className='border'></span>
                        <AnimContact size={this.state.sizeContact} play={this.state.autoplay}/>
                        </Link>
                        <span>Contact</span>
                    </div>
                </div>
            </>
        )
    }
}