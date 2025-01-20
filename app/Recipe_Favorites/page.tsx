'use client';

import ShowRecipe from '@/components/recipe-app/ShowRecipe';
import useFetch from '@/custom-hook/useFetch';
import { useEffect, useState } from 'react';

const page = () => {
	const { data, pending, error } = useFetch({
		url: 'https://dummyjson.com/recipes?limit=5',
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

		setAllRecipes(recipeNames);
	}, [data]);

	return (
		<div className="min-h-screen  flex flex-col items-center ">
			<h1 className="font-extrabold text-[1.6rem]">Favorite food</h1>
			<div className=" flex flex-col items-center gap-2 mx-[3rem] w-full lg:px-3 lg:grid  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-col-4 ">
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
									showRecipe={true}
								/>
							);
						})
					) : null
				) : (
					<p>Please wait...</p>
				)}
			</div>
		</div>
	);
};

export default page;
