'use client';
import { useContext, useEffect } from 'react';
import ShowRecipe from './ShowRecipe';
import { GlobalContext } from './Context';

interface RecipeDetails {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
}

const SelectedRecipe = ({ selectedId }) => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error('RecipeDetails must be used within a GlobalProvider');
	}

	const { recipeDetails, getRecipeDetails, loading } = context;

	useEffect(() => {
		if (selectedId && !recipeDetails) {
			getRecipeDetails(selectedId);
		}
	}, [selectedId, recipeDetails, getRecipeDetails]);

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<p className="font-bold">Loading recipe details...</p>
			</div>
		);
	}

	if (!recipeDetails) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<p className="font-bold">Recipe not found</p>
			</div>
		);
	}

	return (
		<div>
			<ShowRecipe
				id={recipeDetails.id}
				name={recipeDetails.name}
				image={recipeDetails.image}
				ingredients={recipeDetails.ingredients || []}
				showRecipe={true}
				data={recipeDetails}
			/>
		</div>
	);
};

export default SelectedRecipe;
