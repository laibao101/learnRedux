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
		//than making it controlled and maintaining a state for it
		this.refs.input.value = val;
	}

	handleKeyUp = e => {
		if (e.keyCode === 13) {
			this.handleGoClick();
		}
	}

	handleGoClick = () => {
		this.props.onChange(this.getInputValue());
	}

	render(){
		return (
			<div>
				<p>Type a username or repo full name and hit 'Go':</p>
				<input
					type="text"
					ref="input"
					defaultValue={this.props.value}
					onKeyUp={this.handleKeyUp}
				/>
				<button onClick={this.handleGoClick}>
					Go!
				</button>
				<p>
					Code on <a href={GITHUB_REPO} target="_blank">Github</a>
				</p>
				<p>
					Move the DevTools with ctrl+w or hide them with ctrl+h
				</p>
			</div>
		);
	}
}
