import React from 'react';
// import './Style.css';
class BasicCss extends React.Component{
   
render(){
    const colour ={
        colourRed:"red",
        colourBlue:"blue"
    }
    return <div class="box">
        the Component

        <p style={{color:colour.colourBlue,width:"100px"}}>using const css</p> 
        <p style ={{color:"red"}}>inline css</p>
        <span>
            <p class="font-size">external class css(font-size)</p>
            <span id="background-color" >External id css(background)</span>
        </span>
        </div>
}
}
export default BasicCss;