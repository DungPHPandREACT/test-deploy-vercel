import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './Users';
import UsersQuery from './UsersQuery';
import DetailUserQuery from './DetailUserQuery';

const App = () => {
	return (
		<div>
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
