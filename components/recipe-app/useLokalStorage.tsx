import { useEffect, useState } from 'react';

const useLokalStorage = (key: string, defaultValue: string) => {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		try {
			const item = localStorage.getItem(key);
			if (item) {
				setValue(JSON.parse(item));
			}
		} catch (error) {
			console.log('Cannot read from local storage', error);
			setValue(defaultValue);
		}
	}, [defaultValue, key]);

	// value must be stringify
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [defaultValue, value, key]);

	return [value, setValue];
};

export default useLokalStorage;
