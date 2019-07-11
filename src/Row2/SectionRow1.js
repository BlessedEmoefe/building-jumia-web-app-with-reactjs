import React, { Component } from 'react';
import "./style.css"
import firstImage from "./firstImage.jpg"

class SectionRow1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row1">
                <img src={firstImage} className="images" alt="row1 image" width="98%" height="100%"/>
            </div>
         );
    }
}
 
export default SectionRow1;