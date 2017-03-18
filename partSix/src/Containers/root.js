import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTool';
import { Router } from 'react-router';

const Root = ({ store, history }) => {
	<Provider store={store}>
		<div>
			<Router history={history} routes={routes}></Router>
			<DevTools></DevTools>
		</div>
	</Provider>
}

Root.PropTypes = {
	store:PropType.object.isRequired,
	history:PropTypes.object.isRequired
}

export default Root;
