import React from 'react'
import './cv.css'



export default function Cv (props){
    // if ( window.addEventListener ) {
    //     const kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    //     window.addEventListener("keydown", function(e){
    //     kkeys.push( e.keyCode );
    //     if ( kkeys.toString().indexOf( konami ) >= 0 ) {
    //     alert('Bien joué ! Eloignez les enfants svp !');
    //     window.location = "https://www.cbbvillebon.fr/";
    //     }
    //     }, true);
    //     }

    return(


        // <div className='kokonanamimi'>
        //      <Document
        //   file="./mandel-CV.pdf"
        //   onLoadSuccess={this.onDocumentLoadSuccess}
        // ></Document>
        //     {/* <h1>Le CV arrive. Pour l'instant, Tappez le code pour découvrir le site du futur...</h1> */}
        // </div>
        <div className="d-flex justify-content-center">
          <div className='boxCV'>
          <img src={require('./cvmandel.png')}  ></img>


          </div>
      </div>

    )
}