import React, { Component } from 'react';
import "./style.css"
import Section4Row2  from './Section4Row2';
import Section4Row1 from './Section4Row1'

class Section4 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <Section4Row1 />
                <Section4Row2 />
            </div>
         );
    }
}
 
export default Section4;