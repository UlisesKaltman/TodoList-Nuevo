// App.js
import React, { useState } from 'react';
import TareaForm from './components/TareaForm';
import TareaLista from './components/TareaLista';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      nombre: nombreTarea,
      completada: false,
      inicio: new Date(),
      fin: null
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    nuevasTareas[index].fin = new Date();
    setTareas(nuevasTareas);
  };

  const calcularTareaMasRapida = () => {
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

    return tareaMasRapida;
  };

  return (
    <div className="container">
      <h1>Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} />
      <TareaLista
        tareas={tareas}
        completarTarea={completarTarea}
        calcularTareaMasRapida={calcularTareaMasRapida} // Aquí pasa la función
        tareaMasRapida={calcularTareaMasRapida()} // Aquí pasa el resultado de la función
      />
    </div>
  );
}

export default App;
