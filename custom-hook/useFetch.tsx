'use client';
import { useState, useEffect } from 'react';

const useFetch = ({ url, options = {} }) => {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setPending(true);
			const response = await fetch(url, { ...options });
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const data = await response.json();
			setData(data);
			setError(null);
		} catch (error) {
			setError(`Error occurred: ${error.message}`);
			console.error('Cannot fetch data: ', error);
		} finally {
			setPending(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, pending, error };
};

export default useFetch;
