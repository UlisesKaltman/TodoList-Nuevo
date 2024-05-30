import React from "react";

function Item({item,setItem,items})
{
    const eliminarItem= (id)=>{  
       //generar copia de citas
       
       const citasActualizadas = citas;
       console.log(citasActualizadas)
       //usar filter para quitar el elemento que no tenga ese id
       const newlist = citasActualizadas.filter(item=>item.id !== id);

       //pasan a setcitas new array
       setCitas(newlist);

    }
    const {mascota,propietario,fecha,hora,sintomas,id} = cita;
    return (        
        <div className="cita">
            <p>id: <span>{id}</span></p>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={()=>eliminarCita(id)}>Eliminar ×</button>
        </div>
       );
}

export default Cita;