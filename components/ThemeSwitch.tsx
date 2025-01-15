'use client';
import useLocalStorage from '@/custom-hook/useLocalStorage';

const ThemeSwitch = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('theme', 'dark');

	const handleToggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	console.log(theme);
	return (
		<div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white'}>
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
