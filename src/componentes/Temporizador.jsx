import React from "react";
import "../hojas-de-estilo/Temporizador.css"

function animar(){
    document.getElementById("barra").classList.toggle("final");
}

function Temporizador(){
    return(
    <div className="a">
        <div className="progress">
            <div id="barra" className="progress-bar progress-bar-striped inicio animacion" role="progressbar" aria-valuenow="75"
            aria-valuemax="100">
                </div>
        </div>
        <div>
            <button id="boton" className="btn btn-warning" onClick= {function() {animar()}}> jeje</button>
        </div>
        
    </div>
    
 )
}

export default Temporizador