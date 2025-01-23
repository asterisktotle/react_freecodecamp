'use client';

import ShowRecipe from './ShowRecipe';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './Context';

const ListOfRecipes = () => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error('ListOfRecipe must be use used within a GlobalProvider');
	}

	const { recipeList, loading } = useContext(GlobalContext);

	//by using useContext, I can use the recipeList data from Context

	return (
		<div className="sm:grid sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 p-2  w-full flex flex-col items-center gap-1 ">
			{!loading ? (
				recipeList && recipeList.length > 0 ? (
					recipeList.map((recipe) => {
						const { id, name, image, ingredients } = recipe;
						return (
							<ShowRecipe
								key={id}
								id={id}
								name={name}
								image={image}
								ingredients={ingredients}
								showRecipe={false}
								data={recipe}
							/>
						);
					})
				) : (
					<p className="font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						I don't have a recipe. Sorry
					</p>
				)
			) : (
				<p>Please wait...</p>
			)}
		</div>
	);
};

export default ListOfRecipes;
