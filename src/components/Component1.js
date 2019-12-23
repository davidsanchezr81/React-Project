import React  from 'react';
import coral from '../assets/images/DendroCoral.jpeg';


class Component1 extends React.Component{

    render(){
        return(
            <div> <section>
                <h1>This is a Test Component1

                <img src={coral} className="App-logo" alt="logo"/>


               </h1>
                </section> 
                
            
            
            
            </div>
                       
        )
    }

}

export default Component1;