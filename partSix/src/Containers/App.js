import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Explore from '../Components/Explore';
import { resetErrorMessage } from '../Actions';

class App extends Component{
	static PropTypes = {
		//injected by react-redux
		errorMessage:PropTypes.string,
		resetErrorMessage:PropTypes.func.isRequired,
		inputValue:PropTypes.string.isRequired,
		//injected by react-router
		children:PropTypes.node
	}

	render(){
		const { children, inputValue } = this.props;

		return (
			<div>
				<Explore
					onChange={this.handleChange}
					value={inputValue}
				>
					<hr/>
					{this.renderErrorMessage()}
					{this.children}
				</Explore>
			</div>
		);
	}

	renderErrorMessage(){
		const { errorMessage } = this.props;

		if (!errorMessage) {
			return null;
		}

		return (
			<p>
				<b>{errorMessage}</b>
				{' '}
				<a href="#" onClick={this.handleDismissClick}>
					Dismiss
				</a>
			</p>
		);
	}

	handleChange = nextValue => {
		browserHistory.push(`/${nextValue}`);
	}

	handleDismissClick = e => {
		this.props.resetErrorMessage();
		e.preventDefault();
	}
}

const mapStateToProps = (state,ownProps) => ({
	errorMessage:state.errorMessage,
	inputValue:state.inputValue
});

export default connect(mapStateToProps,{ resetErrorMessage })(App);
