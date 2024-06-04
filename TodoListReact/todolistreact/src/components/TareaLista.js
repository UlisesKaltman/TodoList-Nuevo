// components/TareaLista.js
import React from 'react';

function TareaLista({ tareas, completarTarea, calcularTareaMasRapida, tareaMasRapida }) {
  const handleClick = () => {
    calcularTareaMasRapida();
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => completarTarea(index)}
            />
            <span>{tarea.nombre}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Calcular tarea más rápida</button>
      {tareaMasRapida && (
        <p>
          La tarea más rápida fue <strong>{tareaMasRapida.nombre}</strong> y tomó{' '}
          {((tareaMasRapida.fin - tareaMasRapida.inicio) / (1000 * 60)).toFixed(2)} minutos.
        </p>
      )}
    </div>
  );
}

export default TareaLista;
