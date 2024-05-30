import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let tareas = [];

function agregar() {
    let fechaHoraActual = new Date();
    let fechaHoraFormateada = fechaHoraActual.toLocaleString();
    let nombreTarea = document.getElementById("Texto").value;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    let tarea = {
        nombre: nombreTarea,
        inicio: fechaHoraActual,
        fin: null
    };
    
    tareas.push(tarea);
    
    let texto = document.createElement("span");
    texto.textContent = nombreTarea + " (Creado el: " + fechaHoraFormateada + ")";
    
    let contenedor = document.createElement("div");
    contenedor.appendChild(checkbox);
    contenedor.appendChild(texto);
    
    document.getElementById("resultado").appendChild(contenedor);
    
    document.getElementById("Texto").value = "";

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            texto.style.textDecoration = "line-through";
            
            let indice = tareas.findIndex(tarea => tarea.nombre === nombreTarea);
            
            tareas[indice].fin = new Date();
            let fechaHoraFinal = tareas[indice].fin.toLocaleString();
            
            let duracion = (tareas[indice].fin - tareas[indice].inicio) / (1000 * 60);
            
           
            texto.textContent = nombreTarea + " (Creado el: " + fechaHoraFormateada + ") (Tachado: " + fechaHoraFinal + ") (Duración: " + duracion.toFixed(2) + " minutos)";
        } else {
            texto.style.textDecoration = "none";
        }
    });
}

function calcular() {
    let menorDuracion = Number.MAX_VALUE;
    let tareaMasRapida = null;
    
 
    tareas.forEach(tarea => {
        let duracion = tarea.fin - tarea.inicio;
        if (duracion < menorDuracion) {
            menorDuracion = duracion;
            tareaMasRapida = tarea;
        }
    });
    
    
    if (tareaMasRapida) {
        let duracionEnMinutos = menorDuracion / (1000 * 60);
        alert("La tarea más rápida fue '" + tareaMasRapida.nombre + "' y tomó " + duracionEnMinutos.toFixed(2) + " minutos.");
    } else {
        alert("No hay tareas completadas.");
    }
}


