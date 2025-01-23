'use client';
import { useContext } from 'react';
import { GlobalContext } from './Context';
import ShowRecipe from './ShowRecipe';
const Favorites = () => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error('RecipeDetails must be used within a GlobalProvider');
	}

	const { favoriteList } = context;

	return (
		<div className="min-h-screen  flex flex-col items-center sm:w-fit">
			<div className="sm:grid sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 p-2  w-full flex flex-col items-center gap-1 ">
				{favoriteList && favoriteList.length > 0 ? (
					favoriteList.map((recipe) => {
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
					<p>You have no favorites</p>
				)}
			</div>
		</div>
	);
};

export default Favorites;
