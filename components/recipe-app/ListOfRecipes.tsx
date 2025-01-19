'use client';

import useFetch from '@/custom-hook/useFetch';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ShowRecipe = ({ id, name, image, ingredients }) => {
	return (
		<div
			className="p-2 rounded-lg shadow-md w-fit flex flex-col justify-center item-center overflow-hidden h-full hover:bg-green-600 hover:text-white transition-all duration-500 ease-in-out"
			key={id}
		>
			<div className="relative w-full h-full p-3 rounded-lg overflow-hidden">
				<Image
					className="overflow-hidden object-cover rounded-lg hover:scale-125 transition-transform duration-300 h-full"
					src={image}
					height={300}
					width={300}
					alt={name}
				/>
			</div>
			<h2 className=" font-medium text-base text-center cursor-pointer">
				{name}
			</h2>
		</div>
	);
};

const ListOfRecipes = () => {
	const { data, pending, error } = useFetch({
		url: 'https://dummyjson.com/recipes',
		options: {},
	});
	const [allRecipes, setAllRecipes] = useState([]);

	useEffect(() => {
		if (data === null) return;
		const recipes = data.recipes;
		const recipeNames = recipes.map((item) => {
			return {
				name: item.name,
				id: item.id,
				image: item.image,
				ingredients: item.ingredients,
			};
		});
		console.log(recipeNames);
		setAllRecipes(recipeNames);
	}, [data]);

	return (
		<div className="sm:grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 flex flex-col items-center gap-1 mx-[3rem]">
			{!pending ? (
				allRecipes && allRecipes.length > 0 ? (
					allRecipes.map((recipe) => {
						const { id, name, image, ingredients } = recipe;
						return (
							<ShowRecipe
								key={id}
								id={id}
								name={name}
								image={image}
								ingredients={ingredients}
							/>
						);
					})
				) : null
			) : (
				<p>Please wait...</p>
			)}
		</div>
	);
};

export default ListOfRecipes;
