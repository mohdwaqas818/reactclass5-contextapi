import React, {useContext} from 'react';
import CounterContext from './CounterContext';

function ChildContext() {
	let b = useContext(CounterContext);
	return(
		<div>
			<h1>I am Child Context: {b}</h1>
			<button onClick={() => {b[1](++b[0])}}>Child Button</button>
			<button onClick={() => {b[1](--b[0])}}>Child Decrement</button>
		</div>
	);
}

export default ChildContext;