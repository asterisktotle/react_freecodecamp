import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defaultValue: string) => {
	//state that track if it is mounted or not
	const [mounted, setMounted] = useState(false);
	const [value, setValue] = useState(defaultValue);

	//first useEffect to handle mounting state
	useEffect(() => {
		setMounted(true);
	}, []);

	// second useEffect to load from LocalStorage once mounted
	useEffect(() => {
		if (mounted) {
			try {
				const item = localStorage.getItem(key);

				if (item) {
					setValue(JSON.parse(item));
				}
			} catch (error) {
				console.log('Error reading from local storage', error);
				setValue(defaultValue);
			}
		}
	}, [key, mounted, defaultValue]);

	//save to LocalStorage when value changes
	useEffect(() => {
		if (mounted) {
			try {
				localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.log('Error saving to local storage:', error);
			}
		}
	}, [key, value, mounted]);

	return [value, setValue];
};

export default useLocalStorage;
