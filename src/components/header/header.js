import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'



export default class Header extends Component{

    render(){
        return(
                <div className='containerHeader'>
                    <nav className='navBar'>
                        <ul>
                            <li className='elementInNav border-right border-dark' > <Link to='home'> Présentation </Link> </li>
                            <li className='elementInNav border-right border-dark' > <Link to='competences'> Compétences </Link> </li>
                            <li className='elementInNav border-right border-dark' > <Link to='formations'> Formations </Link> </li>
                            <li className='elementInNav shortElementInNav border-right border-dark' > <Link to='projets'> Projets </Link> </li>
                            <li className='elementInNav shortElementInNav border-right border-dark' > <Link to='contact'> Contact </Link> </li>
                            <li className='elementInNav shortElementInNav' > <Link to='cv'> Cv </Link> </li>                    
                        </ul>
       
                    </nav>
                </div>
        )
    }
}