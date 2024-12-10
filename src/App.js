import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './Users';
import UsersQuery from './UsersQuery';
import DetailUserQuery from './DetailUserQuery';
import { useState } from 'react';
import useCounter from './hooks/useCounter';

const App = () => {
	const { count: count1, handleIncrementCount: handleIncrementCount1 } =
		useCounter(1);
	const { count: count2, handleIncrementCount: handleIncrementCount2 } =
		useCounter(10);
	const { count: count3, handleIncrementCount: handleIncrementCount3 } =
		useCounter(30);
	const { count: count4, handleIncrementCount: handleIncrementCount4 } =
		useCounter(30);

	return (
		<div>
			<button onClick={handleIncrementCount1}>Tăng giá trị</button>
			<h1>{count1}</h1>

			<hr />

			<NavLink to='/users' style={{ margin: '12px' }}>
				Component Users bình thường
			</NavLink>
			<NavLink to='/users-query' style={{ margin: '12px' }}>
				Component Users sử dụng React Query
			</NavLink>

			<Routes>
				<Route path='/users' element={<Users />} />
				<Route path='/users-query' element={<UsersQuery />} />
				<Route path='/users-query/:id' element={<DetailUserQuery />} />
			</Routes>
		</div>
	);
};

export default App;
