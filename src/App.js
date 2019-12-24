import React from 'react';
import logo from './assets/images/logo.svg';
import coral from './assets/images/DendroCoral.jpeg';
import './assets/css/App.css';

import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {

  var name = "Reef";
  var lastname = "Business";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={coral} className="coral-logo" alt="logo"/>
        <p>
            {PublishingFeature(name, lastname)}
        </p>
                   
        </header>

        <section className="components"> 
        
        <Component1/>

        </section>
        

     

        </div>
  );
}


function PublishingFeature(name, lastname){
  var presentacion = <h2>The {name}  {lastname}</h2>
  return presentacion;
}

export default App;
