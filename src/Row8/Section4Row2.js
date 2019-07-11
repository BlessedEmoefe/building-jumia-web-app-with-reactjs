import React, { Component } from 'react';
import "./style.css"
import man2 from "./man2.jpg"

class Section4Row2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row2">
                <img src={man2} className="images" alt="row2 image" width="98%" height="100%" />
            </div>
         );
    }
}
 
export default Section4Row2;