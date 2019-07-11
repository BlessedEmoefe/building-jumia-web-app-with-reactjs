import React, { Component } from 'react';
import "./style.css"
import fan from "./fan.jpg"

class Section2Row1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row1">
                <img src={fan} className="images" alt="row1 image" width="98%" height="100%"/>
            </div>
         );
    }
}
 
export default Section2Row1;