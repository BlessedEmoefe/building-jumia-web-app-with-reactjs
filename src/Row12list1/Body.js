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
                 <Cards src={first} up="The Colossal Kajal (6 HR..." center="N 1,360" down="N 1,700"/>
                 <Cards src={second} up="Fit Me Matte+Porele..." center="N 2,290" down="2,860"/>
                 <Cards src={third} up="FIT-ME POWER ESPRES..." center="N 2,360" down="N 2,950"/>
                 <Cards src={forth} up="COLOR SENSATIONAL VI..." center="N 3,260" down="N 4.070"/>
                 <Cards src={fifth} up="GREAT LASH MASCARA..." center="N 1,220" down="N 1,520"/>
                 <Cards src={sixth} up="COLOSSAL KAJAL 12HR..." center="N 1,820" down="N 2,270"/>
        </div> 
        );
    }
}
 
export default Body;