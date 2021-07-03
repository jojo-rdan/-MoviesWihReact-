//From React
import React from 'react';
import ReactDOM from 'react-dom';

//Estilos
import './index.css';

//Componentes
import {App} from "./App.jsx";

// const contenido =<div>
//     <h1>Hola desde React</h1>
//     <div>Hola desde REact</div>
// </div>;

// function Componente({titulo, children}){
    // const titulo = props.titulo;
    // const contenido = props.contenido;
//     return <div className="contenedor">
//     <h1>{titulo}</h1>
//     <div>{children}</div>
// </div>;
// }

ReactDOM.render(<App />, document.getElementById('root')
);
