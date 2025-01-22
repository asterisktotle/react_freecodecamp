'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { GlobalContext } from './Context';

const NavBar = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { searchParam, setSearchParam, handleSubmit } =
		useContext(GlobalContext);

	const menuList = [
		{
			id: 1,
			label: 'Home',

			to: '/',
		},
		{
			id: 2,
			label: 'Favorites',

			to: '/Recipe_Favorites',
		},
	];

	return (
		<div className="flex py-2 px-4 items-center justify-between">
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
			<form onSubmit={handleSubmit}>
				<input
					className="p-2 border-2 border-green-700 rounded-xl focus:border-green-500 w-[10rem] sm:w-[20rem] xl:w-[30rem]"
					type="text"
					placeholder="Enter a food"
					value={searchParam}
					onChange={(event) => setSearchParam(event.target.value)}
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
