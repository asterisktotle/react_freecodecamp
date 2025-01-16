'use client';
import useLocalStorage from '@/custom-hook/useLocalStorage';
import { useEffect, useState } from 'react';

const ThemeSwitch = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	//prevent flash of incorrect theme
	if (!mounted) {
		return null;
	}

	return (
		<div
			className={`${
				theme === 'dark'
					? 'bg-black text-white transition-colors duration-500'
					: 'bg-white text-black transition-colors duration-1000'
			}`}
		>
			<button
				className="border-green-400 border-2 rounded ml-3"
				onClick={handleToggleTheme}
			>
				Change Theme
			</button>
			{children}
		</div>
	);
};

export default ThemeSwitch;
