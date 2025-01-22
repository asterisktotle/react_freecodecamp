'use client';
import { createContext, useState, ReactNode, FormEvent } from 'react';

interface Recipe {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
}

interface GlobalContextType {
	searchParam: string;
	setSearchParam: (param: string) => void;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
	loading: boolean;
	recipeList: Recipe[];
	getRecipeDetails: (recipeId: number) => Promise<void>;
	recipeDetails: Recipe | null;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
	const [searchParam, setSearchParam] = useState('');
	const [loading, setLoading] = useState(false);
	const [recipeList, setRecipeList] = useState<Recipe[]>([]);
	const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/recipes/search?q=${searchParam}`
			);
			const data = await response.json();

			if (data?.recipes) {
				const filteredRecipes = data?.recipes;
				setRecipeList(filteredRecipes);
				setSearchParam('');
			}
		} catch (error) {
			console.error('Cannot fetch', error);
		} finally {
			setLoading(false);
		}
	}

	async function getRecipeDetails(getRecipeId: number) {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/recipes/${getRecipeId}`
			);
			const data = await response.json();

			if (data) {
				setRecipeDetails(data);
				console.log('this is the recipe ', data);
			}
		} catch (error) {
			console.error('Cannot fetch', error);
			setRecipeDetails(null);
		} finally {
			setLoading(false);
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				searchParam,
				loading,
				recipeList,
				setSearchParam,
				handleSubmit,
				getRecipeDetails,
				recipeDetails,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
