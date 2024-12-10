import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const UsersQuery = () => {
	const queryClient = useQueryClient();

	const fetchUsers = () => {
		return axios.get(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students'
		);
	};

	const addUser = (newUser) => {
		return axios.post(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students',
			newUser
		);
	};

	const fetchUser = (id) => {
		return axios.get(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students/' + id
		);
	};

	const handleOnMouseEnter = (id) => {
		console.log('onMouseEnter....', id);
		queryClient.prefetchQuery({
			queryFn: () => fetchUser(id),
			queryKey: ['users', id],
			staleTime: 15000,
			cacheTime: 60000,
		});
	};

	const [name, setName] = useState('');

	const { data, isLoading, error } = useQuery({
		queryFn: fetchUsers,
		queryKey: ['users'],
		refetchOnWindowFocus: true,
		staleTime: 15000,
		cacheTime: 60000,
	});

	const { mutate: mutateAddUser } = useMutation({
		mutationFn: (payload) => addUser(payload),
		onSuccess: () => {
			console.log('success...');
			queryClient.refetchQueries(['users']);
		},
		onError: () => {
			console.log('error...');
		},
	});

	useEffect(() => {
		window.addEventListener('focus', () => {
			console.log('Focused...');
		});
	}, []);

	const handleAddNewUser = () => {
		const user = {
			name: name,
		};
		mutateAddUser(user);
	};

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	return (
		<div>
			<input value={name} onChange={(event) => setName(event.target.value)} />
			<button onClick={handleAddNewUser}>Thêm mới user</button>
			<ul>
				{data.data.map((user) => (
					<li key={user.id} onMouseEnter={() => handleOnMouseEnter(user.id)}>
						<NavLink to={`${user.id}`}>{user.name}</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersQuery;
