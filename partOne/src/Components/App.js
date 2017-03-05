import Todo from './Todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Action/Action';

function mapStateToProps (state) {
	return state;
}


function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Todo);

export default App;
