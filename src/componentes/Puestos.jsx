import React from "react";
import "../hojas-de-estilo/Puestos.css";


function crearPuestos(numero,puesto, puntos) {
     return (
      <tr className="puestos">
        <td>{numero}- {puesto}</td>
        <td className="puntos">{puntos}</td>
      </tr>
      
    );
  }


function Puestos(props) {
  return (
    <table>
      <tr className="titulos">
        <th className="titulo-nombre">Nombre</th>
        <th className="titulo-puntos">Puntos</th>
      </tr>
      {crearPuestos(1,props.uno, props.P1)}
      {crearPuestos(2,props.dos, props.P2)}
      {crearPuestos(3,props.tres, props.P3)}
      {crearPuestos(4,props.cuatro, props.P4)}
      {crearPuestos(5,props.cinco, props.P5)}
      {crearPuestos(6,props.seis, props.P6)}
      {crearPuestos(7,props.siete, props.P7)}
      {crearPuestos(8,props.ocho, props.P8)}
      {crearPuestos(9,props.nueve, props.P9)}
      {crearPuestos(10,props.diez, props.P10)}
      
    </table>
  );
}

export default Puestos;
