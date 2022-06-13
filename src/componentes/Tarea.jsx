import React from "react";
import "../hoja-de-estilos/Tarea.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiFillCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}
