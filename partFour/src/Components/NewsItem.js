import React,{ Component } from 'react';

export default class NewsItem extends Component{
	render(){
		const { content } = this.props;
		return(
			<li>{content}</li>
		);
	}
}
