import React, { Component } from 'react';
import "./style.css"
import iphone from "./iphone.jpg"

class Section5Row1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row1">
                <img src={iphone} className="images" alt="row1 image" width="98%" height="100%"/>
            </div>
         );
    }
}
 
export default Section5Row1;