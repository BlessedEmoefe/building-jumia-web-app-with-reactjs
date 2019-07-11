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
                 <Cards src={first} up="S10 Lite 5.2 Inch HD 4GB...." center="N 31,820" down="N 44,590"/>
                 <Cards src={second} up="Spark 3 (KB7) 6.2-Inch H..." center="N 32,240" down="N 33,089"/>
                 <Cards src={third} up="Note 5 stylus (X605)6-In..." center="N 52,390" down="N 52,833"/>
                 <Cards src={forth} up="Note plus 5.2-inch FHD (..." center="N 27,990" down="N 44,990"/>
                 <Cards src={fifth} up="Galaxy A20 Dual Sim- 6.4..." center="N 54,000" down="N 65,000"/>
                 <Cards src={sixth} up="Camon 11 (CF7) 6.2-Inch...." center="N 48,570" down="N 50,200"/>
        </div> 
        );
    }
}
 
export default Body;