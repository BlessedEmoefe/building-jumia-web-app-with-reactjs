import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <p>Deals of the day</p>
            <div className="headeright">
                <p>Ends on</p>
                <p>See More > </p>
            </div>
        </div>
        )
    }
}
 
export default Header;