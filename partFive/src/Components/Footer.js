import React from 'react';
import FilterLink from '../Containers/FilterLink';

export default const Footer = () => (
	<p className="footer">
		Show:
		{" "}
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		{" , "}
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{" , "}
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</p>
)
