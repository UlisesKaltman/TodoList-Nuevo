// components/TareaForm.js
import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [nombreTarea, setNombreTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(nombreTarea);
    setNombreTarea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Escribir lo que tienes que hacer</label>
      <input
        type="text"
        value={nombreTarea}
        onChange={(e) => setNombreTarea(e.target.value)}
      />
      <button type="submit">Agregar tarea a la lista</button>
    </form>
  );
}

export default TareaForm;
