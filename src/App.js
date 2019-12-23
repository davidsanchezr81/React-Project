import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Component1 from './components/Component1';
import Component2 from './components/Component2';


function HolaMundo(nombre, apellido){
  var presentacion = <h2>Hi, I am {nombre} {apellido} and this is my React project</h2>
  return presentacion;
}


function App() {

  var nombre = "David";

  var apellido = "Sanchez";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            {HolaMundo(nombre, apellido)}
        </p>
                   
        </header>

        <section className="components"> 
        <Component1/>
        </section>
        

        <section className="components"> 
        <Component2/>
        </section>

        </div>
  );
}

export default App;
