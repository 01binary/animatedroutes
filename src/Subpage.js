import React from 'react';
import { AnimatedWrapper } from './AnimatedWrapper';

export const Subpage = AnimatedWrapper(props => (
	<div className="page">
		<h1>Subpage</h1>
		<p>Hello from a sub page!</p>
	</div>
));
