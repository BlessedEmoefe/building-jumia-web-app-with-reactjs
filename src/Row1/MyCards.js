import React, { Component } from 'react';
import "./css.css"

class MyCards extends Component {
    state = {  }
    render() {
        const {src,text}=this.props 
        return ( 
            <div className="mycards">
                <div className="photo">
                    <img src={src} alt="images" height="10vh" />
                </div>
                <div className="tex">
                    {text}
                </div>
            </div>
         );
    }
}
 
export default MyCards;