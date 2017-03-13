import React,{ Component } from 'react';
import News from '../Components/News';
import NewsItem from '../Components/NewsItem';
import Select from '../Components/Select';
import { connect } from 'react-redux';
import * as ActionCreators from '../Actions';
import { bindActionCreators } from 'redux';
import { fetchReactjs } from '../Actions';

class Container extends Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchReactjs('reactjs'));
		console.log('react js did mount');
	}

	render(){
		const news = this.props.news || [];
		const { title } = this.props;
		const time = new Date().getTime();
		return (
			<div className="container">
				<h1>{title}</h1>
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
		const { dispatch } = this.props;
		console.log(value);
		dispatch(fetchReactjs(value));
	}
}


 const mapStateToProps = state => {
	 return {
		 news:state.news,
		 title:state.title
	 }
 }

 const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators,dispatch);

export default connect(mapStateToProps)(Container);
