import React, { Component } from 'react';
import "./style.css"
import Section2Row2 from './Section2Row2';
import Section2Row1 from './Section2Row1'

class Section2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <Section2Row1 />
                <Section2Row2 />
            </div>
         );
    }
}
 
export default Section2;