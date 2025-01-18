'use client';
import { useState, useEffect } from 'react';

const Suggestions = ({ data }) => {
	if (!data || data.length === 0) {
		return null;
	}

	return (
		<ul>
			{data && data.length
				? data.map((item, index) => <li key={index}> {item}</li>)
				: null}
		</ul>
	);
};

const SearchAutoComplete = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [searchParam, setSearchParam] = useState('');
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [showMessageError, setShowMessageError] = useState(null);
	const [dropdown, setDropdown] = useState(false);

	const fetchListOfUsers = async () => {
		try {
			setLoading(true);
			const response = await fetch('https://dummyjson.com/users');

			if (!response.ok) {
				console.log('error');
				setLoading(false);
				setShowMessageError('error cannot fetch');
				return;
			}

			const data = await response.json();

			if (data && data.users.length > 0) {
				const firstName = data.users.map((person) =>
					person.firstName.toLowerCase()
				);
				setUsers(firstName);
				setShowMessageError(null);
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchListOfUsers();
	}, []);

	const handleOnChange = (e) => {
		const query = e.target.value.toLowerCase();
		setSearchParam(query);
		if (query.length > 0) {
			const filteredData =
				users && users.length
					? users.filter((item) => item.indexOf(query) > -1)
					: [];
			setFilteredUsers(filteredData);
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	};
	console.log(users, filteredUsers);
	return (
		<div>
			{loading ? (
				<h1>Please Wait</h1>
			) : (
				<input
					className="border-2 border-black p-1"
					onChange={handleOnChange}
				/>
			)}
			{dropdown && <Suggestions data={filteredUsers} />}
		</div>
	);
};

export default SearchAutoComplete;
