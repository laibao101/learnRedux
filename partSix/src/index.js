import React form 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './Containers/root';
import configureStore from './store/configureStore';


const store = configureStore();
const history = SyncHIstoryWithStore(browserHistory,store);

const root = document.getElementById('root');

render(
	<Root store={store} history={history}></Root>,
	root
);
