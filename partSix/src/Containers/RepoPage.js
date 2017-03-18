import React, { Component, PropTypes } from 'react'
import { loadRepo, loadStargazers } from '../actions'
import { connect } from 'react-redux';
import Repo from '../Components/Repo';
import User from '../Components/User';
import List from '../Components/List';


class RepoPage extends Component{

	static PropTypes = {
		repo:PropTypes.object,
		fullName:PropTypes.string.isRequired,
		name:PropTypes.string.isRequired,
		owner:PropTypes.object,
		stargazers:PropTypes.array.isRequired,
		stargazersPagination:PropTypes.object,
		loadRepo:PropTypes.func.isRequired,
		loadStargazers:PropTypes.func.isRequired
	}

	componentWillMount(){
		loadData(this.props);
	}

	loadData = props => {
		const { fullName } = props;

		props.loadRepo(fullName,['description']);
		props.loadStargazers(fullName);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.fullName !== this.props.fullName) {
			loadData(nextProps);
		}
	}

	handleLoadMoreClick = () => {
		this.props.loadStargazers(fullName,true);
	}

	renderUser(user){
		return <User user={user} key={user.login}></User>;
	}

	render(){
		const { repo, name, owner } = this.props;

		if (!repo || !owner) {
			return (
				<h1>
					<i>Loading {name} details...</i>
				</h1>
			);
		}

		const { stargazers, stargazersPagination } = this.props;

		return (
			<div>
				<Repo repo={repo} owner={owner}></Repo>
				<hr/>
				<List
					renderItem={this.renderUser}
					items={stargazers}
					onLoadMoreClick={this.handleLoadMoreClick}
					loadingLabel={`Loading stargazers of ${name} ...`}
					{...stargazersPagination}
				></List>
			</div>
		);
	}
}

const mapStateToProps = (state,ownProps) =>{
	//we need to lower case the login/name due to the way GitHub's API behaves
	//Have a look at ../middleware/api.js for more details
	const login = ownProps.params.login.toLowerCase();
	const name = ownProps.params.name.toLowerCase();

	const {
		pagination:{ stargazersByRepo },
		entities:{ users, repos}
	} = state;

	const fullName = `${login}/${name}`;
	const stargazersPagination = stargazersByRepo[fullName] || { ids:[] };
	const stargazers = stargazersPagination.ids.map(id => users[id]);

	return {
		fullName,
		name,
		stargazers,
		stargazersPagination,
		repo:repos[fullName],
		owner:users[login]
	};
}

export default connect(mapStateToProps,{
	loadRepo,
	loadStargazers
})(RepoPage);
