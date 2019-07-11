import React, { Component } from 'react';
import "./style.css"
import fridge from "./fridge.jpg"

class Section2Row2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row2">
                <img src={fridge} className="images" alt="row2 image" width="98%" height="100%" />
            </div>
         );
    }
}
 
export default Section2Row2;