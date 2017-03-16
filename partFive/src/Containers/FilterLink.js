import { connect } from 'react-redux';
import Link from '../Components/Link';
import { setVisibilityFilter } from '../Actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => ({
	active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setVisibilityFilter }, dispatch )


const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;
