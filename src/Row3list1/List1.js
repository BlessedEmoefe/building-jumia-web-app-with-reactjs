import React, { Component } from 'react';
import "./style.css"
import Header from "./Header"
import Body from "./Body"

class List1 extends Component {
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
 
export default List1;