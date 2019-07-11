import React, { Component } from 'react';
import List1 from "./Row3list1/List1"
import Section from "./Row2/Section"
import Section2 from "./Row4/Section2"
import Section3 from "./Row6/Section3"
import Section4 from "./Row8/Section4"
import Section5 from "./Row10/Section5"
import FirstComponent from "./Row1/FirstComponent"

import List2 from "./Row5list1/List2"
import List3 from "./Row7list1/List3"
import List4 from "./Row9list1/List4"
import List5 from "./Row11list1/List5"
import List6 from "./Row12list1/List6"

class Output extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <FirstComponent />
                <List1 />
                <Section />
                <List2 />
                <Section2 />
                <List3 />
                <Section3 />
                <List4 />
                <Section4 />
                <List5 />
                <Section5 />
                <List6 />
            </div>
         );
    }
}
 
export default Output;