import React,{ Component, PropTypes } from 'react';

const GITHUB_REPO = 'https://github.com/reactjs/redux';

export default class Explre extends Component{
	static PropTypes = {
		value:PropTypes.string.isRequired,
		onChange:PropTypes.func.isRequired
	}

	componentWillMount(nextProps){
		if (nextProps.value !== this.props.value) {
			this.setInputValue(nextProps.value);
		}
	}

	getInputValue = () => this.refs.input.value;

	setInputValue = (val) => {
		//Generally mutating DOM is a bad idea in React Component
		//but doing this for a single uncontrolled field is less fus
	}
}
