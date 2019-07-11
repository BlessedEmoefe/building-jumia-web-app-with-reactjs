import React, { Component } from 'react';
import "./style.css"
import pampers from "./pampers.jpg"

class Section3Row2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row2">
                <img src={pampers} className="images" alt="row2 image" width="98%" height="100%" />
            </div>
         );
    }
}
 
export default Section3Row2;