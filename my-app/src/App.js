import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Style.css';

import BasicCss from './BasicCss';
import PropsState from './PropsState';
import LifeCycle from './LifeCycle';
import ConditionalRendering from './ConditionalRendering';
function App() {
  return (
    <span>
      <div className="row">
        <BasicCss class="col" ></BasicCss>

        <PropsState class="col" info="sent from parent to child prop"></PropsState>
        <LifeCycle class="col"></LifeCycle>
        <ConditionalRendering class="col"></ConditionalRendering>
      </div>
      
    </span>
  );
}

export default App;
