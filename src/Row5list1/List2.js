import React, { Component } from 'react';
import "./style.css"
import Header from "./Header"
import Body from "./Body"

class List2 extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container">
            <Header />
            <Body /> 
        </div>
         );
    }
}
 
export default List2;