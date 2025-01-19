'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const menuList = [
		{
			id: 1,
			label: 'Home',

			to: '/Recipe_Home',
		},
		{
			id: 2,
			label: 'Favorites',

			to: '/Recipe_Favorites',
		},
	];

	return (
		<div className="flex px-4 items-center justify-between">
			<Link
				className="text-green-600 font-extrabold text-[1.45rem] sm:text-[2rem] lg:text-[3rem]"
				href={'/Recipe_Home'}
			>
				{' '}
				FoodHub{' '}
			</Link>

			<div className="flex gap-3 sm:hidden font-semibold">
				{menuList.map((item) => (
					<Link
						className={`${
							currentPage === item.id && 'border-b-green-700 border-b-2'
						}`}
						key={item.id}
						href={item.to}
						onClick={() => setCurrentPage(item.id)}
					>
						{item.label}{' '}
					</Link>
				))}
			</div>
			<form>
				<input
					className="p-2 border-2 border-green-700 rounded-xl focus:border-green-500 w-[10rem] sm:w-[20rem] xl:w-[30rem]"
					type="search"
					placeholder="Enter a food"
				/>
			</form>
			<div className=" hidden sm:flex sm:gap-3 sm:font-semibold">
				{menuList.map((item) => (
					<Link
						className={`${
							currentPage === item.id && 'border-b-green-700 border-b-2'
						}`}
						key={item.id}
						href={item.to}
						onClick={() => setCurrentPage(item.id)}
					>
						{item.label}{' '}
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavBar;
