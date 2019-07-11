import React, { Component } from 'react';
import "./style.css"
import man from "./man.jpg"

class Section4Row1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row1">
                <img src={man} className="images" alt="row1 image" width="98%" height="100%"/>
            </div>
         );
    }
}
 
export default Section4Row1;