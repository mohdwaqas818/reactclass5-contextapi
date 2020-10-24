import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

const CounterContext = createContext(10);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)

export default CounterContext;