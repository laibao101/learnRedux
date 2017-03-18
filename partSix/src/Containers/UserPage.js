import React,{ Component } from 'react';
import { connect } from 'react-redux';
import List from '../Components/List';
import User from '../Components/User';
import Repo from '../Components/Repo';
import { loadUser, loadStarred } from '../Actions';
import zip from 'lodash/zip';

const loadData = ({ login, loadUser, loadStarred }) => {
	loadUser(login,['name']);
	loadStarred(login);
}

class UserPage extends Component{
	static PropTypes = {
		login:PropTypes.string.isRequired,
		user:PropTypes.string.isRequired,
		starredPagination:PropTypes.object,
		starredRepos:PropTypes.array.isRequired,
		starredRepoOwners:PropTypes.array.isRequired,
		loadUser:PropTypes.func.isRequired,
		loadStarred:PropTypes.func.isRequired
	}

	componentWillMount(){
		loadData(this.props);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.login !== this.props.login) {
			loadData(nextProps);
		}
	}

	handleLoadMOreClick = () => {
		this.props.loadStarred(this.props.login,true);
	}


	renderRepo([repo,owner]){
		return (
			<Repo
				repo={repo}
				owner={owner}
				key={repo.fullName}
			></Repo>
		);
	}

	render(){
		const { user, login } = this.props;

		if (!user) {
			return (
				<h1>
					<i>
						Loading  {login} {"'s profile..."}
					</i>
				</h1>
			);
		}

		const { starredRepos, starredRepoOwners, starredPagination } = this.props;

		return (
			<div>
				<User user={user}></User>
				<hr/>
				<List
					renderItem={this.renderRepo}
					items={zip(starredRepos,starredRepoOwners)}
					onLoadMoreClick={this.handleLoadMoreClick}
					loadingLabel={`Loading ${login}'s starred `}
					{...starredPagination}
				></List>
			</div>
		);
	}
}



const mapStateToProps = (state,ownProps) => {
	//we need to lower case the login due to the GitHub's API behaves
	//Hava a look at ../middleware/api.js for details

	const login = ownProps.params.login.toLowercase();

	const {
		pagination:{ starredByUser },
		entities:{ users, repos}
	} = state;

	const starredPagination = starredByUser[login] || { ids:[] };
	const starredRepos = starredPagination.ids.map( id => repos[id]);
	const starredRepoOwners = starredRepos.map( repo => user[repo.owner]);

	return {
		login,
		starredRepos,
		starredPagination,
		starredRepoOwners,
		user:users[login]
	}
}

export default connect(mapStateToProps,{ loadUser, loadStarred })(UserPage);
