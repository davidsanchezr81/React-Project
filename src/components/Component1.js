import React  from 'react';
import coral from '../assets/images/DendroCoral.jpeg';


class Component1 extends React.Component{

    render(){

        let fish = {
            name: `Angel Fish`,
            nicknames: [`Pomacanthus `, `Angels `,`Others`],
            maxsize: 400}

        return(
            <div className="Component1">
            <h1>{fish.name}</h1>
            <h3>{fish.maxsize}</h3>
            <ol>
                {
                    fish.nicknames.map((nicknames, i) => {
                        return(
                            <li key={i}>
                                {nicknames} {<img src={coral} className="coral-logo" alt="logo" height="42" width="42"/>}
                            </li>
                        );
                    })
                }
            </ol>
            </div>
                       
        )
    }
}

export default Component1;