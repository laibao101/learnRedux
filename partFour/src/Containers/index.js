import React,{ Component } from 'react';
import News from '../Components/News';
import NewsItem from '../Components/NewsItem';
import Select from '../Components/Select';
import { connect } from 'react-redux';
import * as ActionCreators from '../Actions';
import { bindActionCreators } from 'redux';

class Container extends Component{
	render(){
		const { news } = this.props;
		const time = new Date().getTime();
		return (
			<div className="container">
				<h1>reactjs</h1>
				<Select></Select>
				<News>
					{'Last updated at'}
					{time}
					<a href="#">Refresh</a>
					{news.length === 0 ? <h3>no News</h3> : news.map(item => <NewsItem key={item.id} {...item}></NewsItem>)}
				</News>
			</div>
		);
	}
}


 const mapStateToProps = state => {
	 return {
		 news:state.news
	 }
 }

 const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Container);
