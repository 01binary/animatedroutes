import React from 'react';
import { AnimatedWrapper } from './AnimatedWrapper';

export const Home = AnimatedWrapper(props => (
	<div className="page">
		<h1>Home</h1>
		<p>Hello from the home page!</p>
	</div>
));
