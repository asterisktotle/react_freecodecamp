'use client';
import { createContext, useState, ReactNode, FormEvent } from 'react';

interface GlobalContextType {
	searchParam: string;
	setSearchParam: (param: string) => void;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
	loading: boolean;
	recipeList: Recipe[];
}

interface Recipe {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
	const [searchParam, setSearchParam] = useState('');
	const [loading, setLoading] = useState(false);
	const [recipeList, setRecipeList] = useState([]);

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/recipes/search?q=${searchParam}`
			);
			const data = await response.json();
			// console.log(data);

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

	console.log(recipeList, 'loading status: ', loading);
	return (
		<GlobalContext.Provider
			value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit }}
		>
			{children}
		</GlobalContext.Provider>
	);
}
