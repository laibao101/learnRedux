import React, {PropTypes} from 'react';

export default class Counter extends React.Component {
  render() {
		//get methods and varibales
		const { increment, incrementIfOdd , incrementAsync, decrement, counter } = this.props;
    return (
			<p>
				Clickd {counter} times
				{' '}
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
				{' '}
				<button onClick={incrementIfOdd}>Increment if odd</button>
				{' '}
				<button onClick={()=>incrementAsync()}>Increment async</button>
			</p>
		);
  }
}

Counter.PropTypes = {
	increment:PropTypes.func.isRequired,
	incrementIdOdd:PropTypes.func.isRequired,
	incrementAsync:PropTypes.func.isRequired,
	decrement:PropTypes.func.isRequired,
	counter:PropTypes.number.isRequired
};
