import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// const mydiv = <h1>Welcome</h1>
// ReactDOM.render(mydiv, document.getElementById('root'));


// class Cat extends React.Component {
//        constructor(){
//            super();
//        }
//     render(){
//         return React.createElement("div", null, "Hello World");
//     }
// }
//mycat = new Cat("nissy");
//document.write(mycat.name);


//  ReactDOM.render(<Cat/>, document.getElementById('root'));