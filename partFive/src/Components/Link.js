import React, { PropTypes } from 'react';

const Link = ({active,children,setVisibilityFilter, filter}) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a href="#"
			onClick={ e => {
				e.preventDefault();
				setVisibilityFilter(filter);
			}}
			>
			{children}
		</a>
	);
}

Link.PropTypes = {
	active:PropTypes.bool.isRequired,
	children:PropTypes.node.isRequired,
	setVisibilityFilter:PropTypes.func.isRequired
}

export default Link;
