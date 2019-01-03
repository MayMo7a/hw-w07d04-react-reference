import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';


class ComponentInfo extends Component {
    render() {
        return(
            <div className="component-info">
                <h1>Component Info</h1>
                <p>components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p>
                <PropsInfo/>
                <StateInfo/>
                <LifeCycleInfo/>
            </div>
        )
    }
}





export default ComponentInfo;