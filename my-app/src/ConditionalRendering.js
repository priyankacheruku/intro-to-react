import React from 'react';
import Child from './Child';

class ConditionalRendering extends React.Component{
    // the parent class of child 
    constructor(props){
        super(props)
        // this.state.value = 0,
        this.state.infoFromChild = ""
    }
    callbackFunction = (childData) => {
        this.state.infoFromChild  = childData
        setTimeout(() => {
            this.forceUpdate()
        }, 3000); 
    }
    state = {
        value : 0 ,
        infoFromChild : ""
    }

    render() {

        if(this.state.infoFromChild)
            return <span className="box"><p>Info from child component</p> 
                    "{this.state.infoFromChild}"
                    </span>
        else
            return <Child value="value from parent" parentCall={this.callbackFunction} ></Child>

    }
}
export default ConditionalRendering;