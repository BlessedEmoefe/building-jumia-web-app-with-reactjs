import React, { Component } from 'react';
import "./style.css"
import Section5Row2  from './Section5Row2';
import Section5Row1 from './Section5Row1'

class Section5 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <Section5Row1 />
                <Section5Row2 />
            </div>
         );
    }
}
 
export default Section5;