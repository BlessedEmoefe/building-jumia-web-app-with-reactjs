import React, { Component } from 'react';
import "./style.css"

class Cards extends Component {
    
    render() { 
        const {src,up,down,center}=this.props
        return ( 
        <div className="cards">
            <div className="picture">
            <img src={src} height="" alt="image" />
            </div>
            <div className="text">
                <div className="up">
                {up}
                </div>
                <div className="center">
                {center}
            </div>
                <div className="down">
                <del>{down}</del>
            </div>
            </div>

        </div> );
    }
}
 
export default Cards;