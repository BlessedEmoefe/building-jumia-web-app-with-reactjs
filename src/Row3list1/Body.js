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
                 <Cards src={first} up="2019 fashion Spining S..." center="N 8,199" down="N 20,000"/>
                 <Cards src={second} up="Diamond engagement Ri..." center="N 1,288" down="N 1,840"/>
                 <Cards src={third} up="Fashin Men's Flat Flip..." center="N 2,999" down="N 45,000"/>
                 <Cards src={forth} up="Quamer LED Double Mov..." center="N 5,000" down="N 7,500"/>
                 <Cards src={fifth} up="Quartz Men Watch Wrist..." center="N 3,800" down="N 6,500"/>
                 <Cards src={sixth} up="Work Office Elegant Dres.." center="N 4,810" down="N 8,560"/>
        </div> 
        );
    }
}
 
export default Body;