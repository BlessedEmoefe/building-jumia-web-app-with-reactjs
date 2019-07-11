import React, { Component } from 'react';
import "./style.css"
import detol from "./detol.jpg"

class Section3Row1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row1">
                <img src={detol} className="images" alt="row1 image" width="98%" height="100%"/>
            </div>
         );
    }
}
 
export default Section3Row1;