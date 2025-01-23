'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { GlobalContext } from './Context';

interface Recipe {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
}

interface ShowRecipeProps {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
	showRecipe?: boolean;
	data: Recipe;
}

const ShowRecipe = ({
	id,
	name,
	image,
	ingredients,
	showRecipe = false,
	data,
}: ShowRecipeProps) => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error('ShowRecipe must be used within a GlobalProvider');
	}

	const { handleAddFavorites, favoriteList } = context;

	return (
		<div
			className={` flex h-full flex-col sm:flex-row sm:items-center
				${
					showRecipe
						? '   justify-center lg:justify-start lg:px-20 sm:gap-9  lg:w-svw'
						: ' sm:flex-col sm:w-fit hover:bg-green-600 hover:text-white transition-all duration-500 justify-center item-center p-2 w-fit  overflow-hidden  ease-in-out rounded-lg shadow-md'
				}`}
			key={id}
		>
			<div
				className={` rounded-lg overflow-hidden p-3 ${
					showRecipe ? 'w-fit size-96  h-fit ' : 'relative w-full h-full '
				}`}
			>
				<Image
					className={`${
						!showRecipe && 'hover:scale-125 transition-transform duration-300'
					} overflow-hidden object-cover rounded-lg  h-full `}
					src={image}
					height={300}
					width={300}
					alt={name}
				/>
			</div>

			<div className={`flex flex-col gap-1`}>
				<h2 className=" font-extrabold text-base text-center cursor-pointer ">
					{name}
				</h2>

				{!showRecipe && (
					<Link
						className="px-10 py-2 self-center text-nowrap text-center cursor-pointer transition-all duration-500 hover:bg-white hover:text-green-600 text-black font-semibold rounded-lg "
						href={`/Recipe_Details/${id}`}
					>
						Show recipes
					</Link>
				)}

				{showRecipe && ingredients && (
					<div className="p-2 sm:p-0">
						<p className="font-semibold">Ingredient</p>
						<ul className="ml-6 ">
							{ingredients.map((ingredient, index) => (
								<li className="list-disc" key={index}>
									{ingredient}
								</li>
							))}
						</ul>
					</div>
				)}

				<button
					onClick={() => handleAddFavorites(data)}
					className={`px-10 py-2 self-center text-nowrap text-center cursor-pointer transition-all duration-500 bg-black hover:bg-slate-400 hover:text-black hover:text-black-600 text-white font-semibold rounded-lg w-fit `}
				>
					{favoriteList.findIndex((item) => item.id === id) !== -1
						? 'Remove Favorite'
						: 'Add Favorite'}
				</button>
			</div>
		</div>
	);
};

export default ShowRecipe;
