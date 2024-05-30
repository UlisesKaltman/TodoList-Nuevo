import React,{useState} from "react"; //useState

function Formulario({setCitas,citas}) {
  const [idContador, setIdContador] = useState(1);
  const agregarCita = ()=>{    
    //validar campos
    const mascotaInput = document.querySelector("#mascota").value;
    const propietarioInput = document.querySelector("#propietario").value;
    if (!isNaN(mascotaInput)) {
      alert("El nombre de la mascota no puede ser un número.");
      return;
    }

    if (!isNaN(propietarioInput)) {
      alert("El nombre del dueño no puede ser un número.");
      return;
    }
    //crear un objeto nuevo con los valores del form
    
    const generarId = ()=>{
      setIdContador(prevId => prevId + 1);
      return idContador;
    }
    
    const obj = {
      id: generarId(),
      mascota: document.querySelector("#mascota").value,
      propietario: document.querySelector("#propietario").value,
      fecha: document.querySelector("#fecha").value,
      hora: document.querySelector("#hora").value,
      sintomas: document.querySelector("#sintomas").value

    } 
    //agregar el objeto nuevo a mi array de citas
    setCitas([...citas,obj]);
  }

  return (   
    <div className="one-half column">      
        <label>Escribir lo que tenes que Hacer</label>
        <input id="Texto" name="Texto" type="textbox" className="form-control"  />          
      </div>
  );
}

export default Formulario;
