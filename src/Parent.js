import React, {useContext} from 'react';
import CounterContext from './CounterContext';
import ChildContext from './ChildContext';
import Son from './Son';

function Parent() {
	let a = useContext(CounterContext);
	return(
		<div className = "mainDiv">
			
			<div className = "parentClass">
				<h1>I am Parent Context: {a[0]}</h1>
				<button onClick={() => {a[1](++a[0])}}>Parent Increment</button>
				<button onClick={() => {a[1](--a[0])}}>Parent Decrement</button>
			</div>

			<div className = "childClass">
				<ChildContext />
			</div>
			
			<div className = "sonClass">
				<Son />
			</div>
		
		</div>
	);
}

export default Parent;