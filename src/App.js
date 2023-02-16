import "./App.css";

import Boton from "./componentes/Boton.jsx";
import Puestos from "./componentes/Puestos";
import Contador from "./componentes/Contador.jsx";
import Temporizador from "./componentes/Temporizador";
import "./hojas-de-estilo/boton.css";
import "./hojas-de-estilo/Contador.css";
import { useState } from "react";



function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    
    <div className="App">
      <div className="contenedor-principal">
        <div>
          <Contador numero={numClics} />

          <Boton texto="Clic" esBotondeClic={true} manejarClic={manejarClic} />

          <Boton
            texto="Reiniciar"
            esBotondeClic={false}
            manejarClic={reiniciarContador}
          />
          <Temporizador></Temporizador>   
        </div> 
            
      </div>
      <div className="contenedor-puestos">
          <Puestos
          uno = "Moncho" P1 = {numClics} 
          dos = "Martho" P2 = "30"
          tres = "light" P3 = ""
          cuatro = "light" P4 = ""
          cinco = "light" P5 = ""
          seis = "light" P6 = ""
          siete = "light" P7 = ""
          ocho = "light" P8 = ""
          nueve = "light" P9 = ""
          diez = "light" P10 = "">             
          </Puestos>
        </div>
    </div>
  );
}

export default App;
