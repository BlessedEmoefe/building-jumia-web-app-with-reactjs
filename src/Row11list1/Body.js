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
                 <Cards src={first} up="Milo Champion Tea 500g..." center="N 1,240" down="N 1,340"/>
                 <Cards src={second} up="STAINLESS STEEL SPRA..." center="N 9,699" down="10,521"/>
                 <Cards src={third} up="Milo Hot Chocolate Refill..." center="N 1,880" down="N 2,500"/>
                 <Cards src={forth} up="Green Coffee Beans..." center="N 6,180" down="N 7,180"/>
                 <Cards src={fifth} up="Blender + 1.5 kettle + Sa..." center="N 12,590" down="N 18,000"/>
                 <Cards src={sixth} up="Electric Kettle 1.7L - NX-4..." center="N 3,600" down="N 5,000"/>
        </div> 
        );
    }
}
 
export default Body;