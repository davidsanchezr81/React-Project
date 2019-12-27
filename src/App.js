import React from 'react';
import logo from './assets/images/logo.svg';
import coral from './assets/images/DendroCoral.jpeg';
import anemone from './assets/images/anemone.jpg'


import './assets/css/App.css';

import Component1 from './components/Component1';
import Header from './components/Header';

function App() {

  var name = "Reef";
  var lastname = "Business";
  
  return (
    <div className="App">
    <Header />

      <header className="App-header">
        {/* <img src={anemone} className="coral-logo" alt="logo" height="200" width="240"/> */}
        <p>
            {/* {PublishingFeature(name, lastname)} */}
        </p>
                   
        </header>

        <section className="components"> 
        
        {/* <Component1/> */}

        </section>
        

     

        </div>
  );
}


function PublishingFeature(name, lastname){
  var presentacion = <h2>The {name}  {lastname}</h2>
  return presentacion;
}

export default App;
