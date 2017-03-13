import React,{ Component } from 'react';
import News from '../Components/News';
import NewsItem from '../Components/NewsItem';
import Select from '../Components/Select';
import { connect } from 'react-redux';
import * as ActionCreators from '../Actions';
import { bindActionCreators } from 'redux';

class Container extends Component{

	constructor(props){
		super(props);
		this.fetchReactjs = props.fetchReactjs;
		this.handleChange = this.handleChange.bind(this);
	}

	render(){
		const news = this.props.news || [];
		const time = new Date().getTime();
		return (
			<div className="container">
				<h1>reactjs</h1>
				<Select onChange={this.handleChange} options={[ 'reactjs', 'frontend' ]}></Select>
				<News>
					{'Last updated at'}
					{time}
					<a href="#">Refresh</a>
					{news.length === 0 ? <h3>no News</h3> : news.map(item => <NewsItem key={item.data.id} {...item}></NewsItem>)}
				</News>
			</div>
		);
	}



	handleChange(value){
		this.fetchReactjs(value)
	}
}


 const mapStateToProps = state => {
	 return {
		 news:state.news
	 }
 }

 const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Container);
