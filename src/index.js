import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// let elemento = document.createElement("p");
// elemento.innerHTML = "Hola, Soy Lucas";
// let contenedor = document.getElementById("root");
// contenedor.appendChild(elemento);

// let elemento = <p>Hola, Soy Lucas</p>;

//incluso puedo crear estructuras enteras
// let elemento2 = (
//   <div>
//     <h1>Hola</h1>
//     <h3>Que tal?</h3>
//     <p>Hola hola</p>
//   </div>
// );

// let contenedor = document.getElementById("root");

// el render sirve para mostar en pantalla el elemento.

// ReactDOM.render(elemento2, contenedor);

// las páginas de react estan hechas con componentes, cada componente es como un bloque, un código que se puede reutilizar, como por ejemplo un tipo de card.
