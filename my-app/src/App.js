import React from 'react';
import logo from './logo.svg';

// import './App.css';
import './Style.css';

import BasicCss from './BasicCss';
import PropsState from './PropsState';
function App() {
  return (
    <div className="App">
      <BasicCss ></BasicCss>
      <PropsState info="sent from parent to child prop"></PropsState>
    </div>
  );
}

export default App;
