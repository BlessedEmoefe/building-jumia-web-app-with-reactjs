import React, { Component } from 'react';
import "./css.css"
import Head from "./Head"
import Parent from "./Parent"


class FirstComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="FirstPage">
                <Head />
                <Parent />
            </div>
         );
    }
}
 
export default FirstComponent;