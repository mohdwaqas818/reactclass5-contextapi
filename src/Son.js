import React, {useContext} from 'react';
import CounterContext from './CounterContext';

function Son() {
	let c = useContext(CounterContext);
	return(
		<div>
			<h1>I am Son Context: {c}</h1>
			<button onClick={() => {c[1](++c[0])}}>Son Button</button>
			<button onClick={() => {c[1](--c[0])}}>Son Decrement</button>
		</div>
	);
}

export default Son;