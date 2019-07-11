import React, { Component } from 'react';
import "./style.css"
import secondImage from "./secondImage.jpg"

class SectionRow2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row2">
                <img src={secondImage} className="images" alt="row2 image" width="98%" height="100%" />
            </div>
         );
    }
}
 
export default SectionRow2;