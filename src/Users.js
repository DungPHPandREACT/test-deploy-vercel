import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		try {
			const response = await axios.get(
				'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
			);
			setUsers(response.data);
		} catch (error) {
			console.log('error: ', error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return <h1>Loading....</h1>;
	}

	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default Users;