import React, { Component } from 'react';
import "./css.css"
import MyCards from "./MyCards"
import first from "./first.png"
import second from "./second.png"
import third from "./third.png"
import forth from "./forth.png"
import fifth from "./fifth.png"
import sixth from "./sixth.png"
import seventh from "./seventh.png"
import eight from "./eight.png"
import ninth from "./ninth.png"
import tenth from "./tenth.png"
import eleventh from "./eleventh.png"
import twelvth from "./twelvth.png"

class Parent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="parent">
                <MyCards src={first} text="" />
                <MyCards src={second} text="" />
                <MyCards src={third} text="" />
                <MyCards src={forth} text="" />
                <MyCards src={fifth} text="" />
                <MyCards src={sixth} text="" />
                <MyCards src={seventh} text="" />
                <MyCards src={eight} text="" />
                <MyCards src={ninth} text="" />
                <MyCards src={tenth} text="" />
                <MyCards src={eleventh} text="" />
                <MyCards src={twelvth} text="" />
            </div>
         );
    }
}
 
export default Parent;