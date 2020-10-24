import React, {useState} from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  let number = useState(1); //its an array [0 num][1 fn]
  console.log(number);
  return (
    <CounterContext.Provider value={number}>
      <div>
        <h1 className="title">React Class5 Assignment - ContextApis</h1>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
