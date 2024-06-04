// components/TareaLista.js
import React from 'react';

function TareaLista({ tareas, completarTarea, calcularTareaMasRapida, tareaMasRapida }) {
  const handleClick = () => {
    if (tareas.length === 0) {
      alert("No hay tareas agregadas.");
      return;
    }

    let menorDuracion = Number.MAX_VALUE;
    let tareaMasRapida = null;

    tareas.forEach((tarea) => {
      if (tarea.fin !== null) {
        const duracion = tarea.fin - tarea.inicio;
        if (duracion < menorDuracion) {
          menorDuracion = duracion;
          tareaMasRapida = tarea;
        }
      }
    });

    if (tareaMasRapida) {
      let duracionEnMinutos = menorDuracion / (1000 * 60);
      alert("La tarea más rápida fue '" + tareaMasRapida.nombre + "' y tomó " + duracionEnMinutos.toFixed(2) + " minutos.");
    } else {
      alert("No hay tareas completadas.");
    }
  };

  return (
    <div>
      <ul className="list-group mb-3">
        {tareas.map((tarea, index) => (
          <li key={index} className="list-group-item">
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => completarTarea(index)}
            />
            <span className={tarea.completada ? 'text-decoration-line-through ms-2' : 'ms-2'}>{tarea.nombre}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} className="btn btn-primary me-2">Calcular tarea más rápida</button>
      {tareaMasRapida && (
        <div className="alert alert-success mt-3" role="alert">
          <strong>¡Tarea más rápida!</strong> La tarea <strong>{tareaMasRapida.nombre}</strong> se completó en{' '}
          {((tareaMasRapida.fin - tareaMasRapida.inicio) / (1000 * 60)).toFixed(2)} minutos.
        </div>
      )}
      {!tareaMasRapida && (
        <div className="alert alert-info mt-3" role="alert">
          No hay tareas completadas.
        </div>
      )}
    </div>
  );
}

export default TareaLista;
