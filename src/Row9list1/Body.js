import React, { Component } from 'react';
import "./style.css"
import Cards from "./Cards"
import second from "./second.jpg"
import third from "./third.jpg"
import forth from "./forth.jpg"
import fifth from "./fifth.jpg"
import sixth from "./sixth.jpg"
import first from "./first.jpg"

class Body extends Component {
    state = {  }
    render() { 
        return (
             <div className="body">
                 <Cards src={first} up="55-Inch UHD Smart Digit..." center="N 273,500" down="N 318,000"/>
                 <Cards src={second} up="32' HD LED TV 32N2176H..." center="N 46,000" down="49,000"/>
                 <Cards src={third} up="50-Inch HX50N2176F Ful..." center="N 99,990" down="N 102,500"/>
                 <Cards src={forth} up="50-Inch LED Full HD TV 5..." center="N 104,900" down="N 115,000"/>
                 <Cards src={fifth} up="50-Inch Full HD LED TV H..." center="N 106,440" down="N 130,000"/>
                 <Cards src={sixth} up="55' Smart UHD 4K TV 55...." center="N 172,500" down="185,000"/>
        </div> 
        );
    }
}
 
export default Body;