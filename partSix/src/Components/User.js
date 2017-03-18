import React,{ PropTypes } from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
	const { login, avatarUrl, name } = this.props;

	return (
		<div className="User">
			<Link to={`${login}`}>
				<img src={avatarUrl} alt={login} width="72" height="72" />
				<h3>
					{login} {name && <span>({name})</span>}
				</h3>
			</Link>
		</div>
	);
}

User.PropTypes = {
	user:PropTypes.shape({
		login:PropTypes.string.isRequired,
		avatarUrl:PropTypes.string.isRequired,
		name:PropTypes.string
	}).isRequired
}

export default User;
