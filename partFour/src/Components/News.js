import React,{ Component } from 'react';

export default class News extends Component{
	render(){
		const { children } = this.props;
		return(
			<ul>
				{children}
			</ul>
		);
	}
}
