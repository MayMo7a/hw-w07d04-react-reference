import React, { Component } from 'react';

class LifeCycleInfo extends Component{
    render(){
        return(
            <div className="lifeCycle-info">
                <h1>Life Cycle Info</h1>
                <h3>Component lifecycle methods</h3>
                <ul> 
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>Unmounting</li>
                </ul>
            </div>
        )
    }
}





export default LifeCycleInfo;