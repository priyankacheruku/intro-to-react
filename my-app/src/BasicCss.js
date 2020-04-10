import React from 'react';
import './Style.css';
class BasicCss extends React.Component{
   
render(){
    const colour ={
        colourRed:"red",
        colourBlue:"blue"
    }
    return <div>
        the Component

        <p style={{color:colour.colourBlue,width:"100px"}}>using const css</p> 
        <p style ={{color:"red"}}>inline css</p>
        <span> using external css
            <p class="font-size">using external class css</p>
            <span id="background-color" >using external id css</span>
        </span>
        </div>
}
}
export default BasicCss;