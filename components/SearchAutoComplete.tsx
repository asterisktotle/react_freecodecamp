'use client';
import useFetch from '@/custom-hook/useFetch';
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
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [dropdown, setDropdown] = useState(false);
	const { data, error, pending } = useFetch({
		url: 'https://dummyjson.com/users?limit=50',
		options: {},
	});

	useEffect(() => {
		if (data && data.users && users.length === 0) {
			const fullName = data.users.map(
				(person) =>
					person.firstName.toLowerCase() + ' ' + person.lastName.toLowerCase()
			);
			setUsers(fullName);
		}
	}, [data, users]);

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
			{pending ? (
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
