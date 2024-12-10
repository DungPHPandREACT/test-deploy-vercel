import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailUserQuery = () => {
	const params = useParams();
	const id = params.id;

	const fetchUser = () => {
		return axios.get(
			'https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students/' + id
		);
	};

	const { data, isLoading } = useQuery({
		queryFn: fetchUser,
		queryKey: ['users', id],
		staleTime: 15000,
		cacheTime: 60000,
	});

	console.log('user: ', data?.data?.name);
	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	return (
		<>
			<h1>Xem chi tiết user</h1>
			<h1>Tên của user là: {data?.data?.name}</h1>
		</>
	);
};

export default DetailUserQuery;
