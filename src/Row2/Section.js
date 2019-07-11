import React, { Component } from 'react';
import "./style.css"
import SectionRow2 from './SectionRow2';
import SectionRow1 from './SectionRow1'

class Section extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <SectionRow1 />
                <SectionRow2 />
            </div>
         );
    }
}
 
export default Section;