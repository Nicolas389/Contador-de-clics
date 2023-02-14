import './App.css';
import logo from "./imagenes/logofree.png";
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx"
import "./hojas-de-estilo/boton.css";
import "./hojas-de-estilo/Contador.css";
import { useState } from 'react';


function App() {

  const [numClics,setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
   setNumClics(0)
  }


  return (
    <div className="App">     
     <div className='contenedor-principal'>

      <Contador
      numero={numClics}  />
      
      <Boton
      texto="Clic" 
      esBotondeClic = {true}
      manejarClic={manejarClic} />

      <Boton 
      texto="Reiniciar" 
      esBotondeClic = {false}
      manejarClic={reiniciarContador} />

     </div>
    </div>
  );
}

export default App;
