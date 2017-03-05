import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../Components/Counter';
import * as CounterActions from '../Actions/Counter';


//get the state.counter bundle with props's counter
function mapStateToProps (state) {
		return {
			counter:state.counter
		};
}


//get all the methods to props
function mapDispatchToProps (dispatch) {
	return bindActionCreators(CounterActions,dispatch);
}

//with the connect method provide with react-redux,we can bundle the state we need and actions with props
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
