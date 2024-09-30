import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/Mona.jpeg';
import fimage2 from '../images/Gorgeous.jpeg';
import fimage3 from '../images/kid.jpeg';
import fimage4 from '../images/Krishna.jpeg';


function Feature(){
    return(
    <div id='features'>
        <h1>Features</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Portraits"/>
            <Featurebox image={fimage2} title="Modern Art"/>
            <Featurebox image={fimage3} title="Realism"/>
            <Featurebox image={fimage4} title="Purposed"/>

        </div>

    </div>
    )
}


export default Feature;
