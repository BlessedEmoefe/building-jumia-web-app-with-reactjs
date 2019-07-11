import React, { Component } from 'react';
import "./style.css"
import Section3Row2  from './Section3Row2';
import Section3Row1 from './Section3Row1'

class Section3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <Section3Row1 />
                <Section3Row2 />
            </div>
         );
    }
}
 
export default Section3;