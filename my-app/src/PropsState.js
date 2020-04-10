import React from 'react';

class PropsState extends React.Component{

    constructor(props){
        super(props)
        console.log(props)        
        this.state.info = props.info
    }
    state={
        info :"",
        current:true
    }
    ToggleButton(){
        this.setState({
            current : !this.state.current
        }
        )
    }
    render(){
        return <div class="box">
            <p>{this.state.info }</p>
            <button onClick={() => this.ToggleButton()}>toggle</button>
            {this.state.current && "press toggle"}
        </div>
    }
}

export default PropsState;