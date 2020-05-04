import React from 'react';
class LifeCycle extends React.Component {

    constructor(props){
        super(props)
        console.log("constructor 1st invoked")
        this.state.info ="In constructor"
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        info : "",
        value: ""
    }

    // componentWillMount(){
    //     console.log("before 1st render invoked")
    //     this.setState({
    //         info:"state from componentwillmount"
    //     })
    // }
    shouldComponentUpdate(nextprops, nextstate){
        console.log(nextstate,nextprops)
        if(this.state.value==nextstate.value){
            console.log("true")
            console.log("it will be reflected")
            
        }
        else{
            console.log("It wont get reflected in component")

        }
        return true
    }

    componentDidMount(){
        console.log("after the component is rendered")
        console.log("best to start API call here")
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
   

    render(){
         return <div className="box">
             Inspect  console
             <br></br>
             Enter name
             <input type="text" value={this.state.value} onChange={this.handleChange}  size="15"></input>
             <br></br>
             <span>Your entered is <h5>{this.state.value}</h5></span>
         </div>
     }
}
export default LifeCycle;