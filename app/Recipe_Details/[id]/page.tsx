'use client';

import { use } from 'react';
import SelectedRecipe from '@/components/recipe-app/SelectedRecipe';

const RecipeDetails = ({ params }: { params: Promise<{ id: number }> }) => {
	const resolvedParams = use(params);

	return (
		<div className="flex justify-center  sm:px-20">
			{resolvedParams && resolvedParams.id ? (
				<SelectedRecipe selectedId={resolvedParams.id} />
			) : (
				<p>Please search a recipe</p>
			)}
		</div>
	);
};

export default RecipeDetails;
