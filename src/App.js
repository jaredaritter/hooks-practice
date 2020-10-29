import React from 'react';
import './App.css';
// import Nested from './components/personal/Nested';
import StateHook from './components/state-hook/StateHook';

// *******************************************************
// CORE APP
// *******************************************************

function App() {
  return (
    <div>
      <h1>App Component</h1>
      {/* <Nested /> */}
      <StateHook />
    </div>
  );
}

export default App;
