import React  from 'react';

class Component2 extends React.Component{

    render(){

        let fish = {
            name: `Angel Fish`,
            nicknames: [`tomate`, `queso`,`jamon cocido`],
            maxsize: 400}

        return(
            <div className="Component1">
            <h1>{fish.name}</h1>
            <h2>{fish.nicknames}</h2>
            <h3>{fish.maxsize}</h3>
            </div>
            
            
        )
    }

}

export default Component2;