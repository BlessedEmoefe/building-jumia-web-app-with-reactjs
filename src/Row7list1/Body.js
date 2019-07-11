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
                 <Cards src={first} up="Women Cotton Dry Roll O..." center="N 1,030" down="N 1,500"/>
                 <Cards src={second} up="48h Fresh Active Spray W..." center="N 1,645" down=""/>
                 <Cards src={third} up="Oud Touch EDP For Men..." center="N 5,990" down="N 10,000"/>
                 <Cards src={forth} up="Beauty EDP For Women..." center="N 6,399" down="N 10,300"/>
                 <Cards src={fifth} up="Galaxy A20 Dual Sim- 6.4..." center="N 4,500" down="N 7,000"/>
                 <Cards src={sixth} up="Camon 11 (CF7) 6.2-Inch...." center="N 1,200" down=""/>
        </div> 
        );
    }
}
 
export default Body;