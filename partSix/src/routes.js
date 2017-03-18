import React from 'react';
import { Route } from 'react-router';
import App from './Containers/App';
import UserPage from './Containers/UserPage';
import RepoPage from './Containers/RepoPage';



export default (
	<Route path="/" component={App}>
		<Route path="/:login/:name" component={UserPage}></Route>
		<Route path="/:login" component={RepoPage}></Route>
	</Route>
);
