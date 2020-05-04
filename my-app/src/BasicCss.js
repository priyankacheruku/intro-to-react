import React from 'react';
// import './Style.css';
class BasicCss extends React.Component{
   
render(){
    const colour ={
        colourRed:"red",
        colourBlue:"blue"
    }
    return <div className="box">
        The First Component

        <p style={{color:colour.colourBlue,width:"100px"}}>CSS Using const</p> 
        <p style ={{color:"red"}}>Inline css(color)</p>
        <span>
            <p className="font-size">External class css(font-size)</p>
            <span id="background-color" >External id css(background)</span>
        </span>
        </div>
}
}
export default BasicCss;