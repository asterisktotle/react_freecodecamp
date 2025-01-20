'use client';

import useFetch from '@/custom-hook/useFetch';
import ShowRecipe from './ShowRecipe';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './Context';

const ListOfRecipes = () => {
	// const { data, pending, error } = useFetch({
	// 	url: 'https://dummyjson.com/recipes',
	// 	options: {},
	// });
	const [allRecipes, setAllRecipes] = useState([]);

	const { recipeList, loading, searchParam } = useContext(GlobalContext);

	useEffect(() => {
		const recipeNames = recipeList.map((item) => {
			return {
				name: item.name,
				id: item.id,
				image: item.image,
				ingredients: item.ingredients,
			};
		});
		console.log('use effect triggered');
		setAllRecipes(recipeNames);
	}, [searchParam]);

	return (
		<div className="sm:grid sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 p-2  w-full flex flex-col items-center gap-1 ">
			{!loading ? (
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
								showRecipe={false}
							/>
						);
					})
				) : (
					<p className="font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						Sorry but I have no recipe yet
					</p>
				)
			) : (
				<p>Please wait...</p>
			)}
		</div>
	);
};

export default ListOfRecipes;
