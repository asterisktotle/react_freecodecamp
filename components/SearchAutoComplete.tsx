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
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [dropdown, setDropdown] = useState(false);

	const fetchListOfUsers = async () => {
		try {
			setLoading(true);
			const response = await fetch('https://dummyjson.com/users?limit=50');

			if (!response.ok) {
				console.log('error');
				setLoading(false);
				return;
			}

			const data = await response.json();

			if (data && data.users.length > 0) {
				const fullName = data.users.map(
					(person) =>
						person.firstName.toLowerCase() + ' ' + person.lastName.toLowerCase()
				);
				setUsers(fullName);
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
