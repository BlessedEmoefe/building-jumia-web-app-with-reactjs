import React, { Component } from 'react';
import "./style.css"
import other from "./other.jpg"

class Section5Row2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Row2">
                <img src={other} className="images" alt="row2 image" width="98%" height="100%" />
            </div>
         );
    }
}
 
export default Section5Row2;