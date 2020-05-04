import React from  'react'
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state.value = props.value
    }
    sendData = () => {
        //calling functio in parent class
             this.props.parentCall("Hey parent , How’s it going?");
    }

    state ={
        value : ""
    }
    componentWillMount(){
        if (this.state.value){
            this.sendData() 
        }
    }
    render() { 
       return <span className="box"> The state updated using prop <br></br>" 
            {this.state.value} " </span> 
        }
    };

export default Child;