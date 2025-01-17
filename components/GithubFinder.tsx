'use client';

import { useEffect, useState } from 'react';

const GithubFinder = () => {
	const [input, setInput] = useState('asterisktotle');
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState();

	const fetchUserName = async (username) => {
		setLoading(true);
		try {
			const response = await fetch(`https://api.github.com/users/${username}`);

			if (!response.ok) {
				let errorMessage;

				try {
					const errorData = await response.json();
					errorMessage =
						errorData.message || `HTTP error! status: ${response.status}`;
				} catch (e) {
					errorMessage = `HTTP error! status:${response.status}`;
				}
				return errorMessage;
			}

			const data = await response.json();
			console.log(data);

			setUserData(data);
		} catch (error) {
			console.error('Error occurred: ', error);
			setUserData();
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	const DisplayUserData = () => {
		if (!userData) {
			return <p>No user found</p>;
		}
		const { name, html_url, public_repos, followers, avatar_url } = userData;

		return (
			<div className="flex gap-5 py-5 items-center justify-center">
				<img
					src={avatar_url}
					alt="user"
					className="size-3/12 rounded-full border-green-600 border-[3px]"
				/>

				<div className="">
					<p> Username: {name}</p>

					<p>
						{' '}
						Profile Link:
						<a href={html_url} target="_blank" className="font-[500]">
							{html_url}
						</a>
					</p>

					<p> Followers: {followers}</p>

					<p> Public Repos: {public_repos}</p>
				</div>
			</div>
		);
	};

	const handleOnChange = (event) => {
		setInput(event.target.value.trim());
	};

	const handleOnClick = () => {
		fetchUserName(input);
		setInput('');
	};

	useEffect(() => {
		if (input.length > 0) fetchUserName(input);
	}, []);

	return (
		<div className="bg-black text-white flex flex-col items-center h-full py-4">
			<h1 className="font-bold">Github Profile Finder</h1>
			<div className="flex gap-2">
				<input
					className="border-2 bg-transparent outline-teal-500 p-1 "
					type="text"
					value={input}
					onChange={handleOnChange}
					placeholder="Enter username"
				/>
				<button
					className="border-2 border-white py-1 px-2"
					onClick={handleOnClick}
				>
					Search
				</button>
			</div>
			{loading ? 'Please wait' : <DisplayUserData />}
		</div>
	);
};

export default GithubFinder;
