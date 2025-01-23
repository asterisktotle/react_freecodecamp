'use client';

import { useRouter } from 'next/navigation';
import { createContext, useState, ReactNode, FormEvent } from 'react';

interface Recipe {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
	isFavorite: boolean;
}

interface GlobalContextType {
	searchParam: string;
	setSearchParam: (param: string) => void;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
	loading: boolean;
	recipeList: Recipe[];
	getRecipeDetails: (recipeId: number) => Promise<void>;
	recipeDetails: Recipe | null;
	handleAddFavorites: (recipeData: Recipe) => void;
	favoriteList: Recipe[];
}
// NOTE: CHECK THE TYPE OF handleAddFavorites in typescript

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
	const [searchParam, setSearchParam] = useState('');
	const [loading, setLoading] = useState(false);
	const [recipeList, setRecipeList] = useState<Recipe[]>([]);
	const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
	const [favoriteList, setFavoriteList] = useState<Recipe[]>([]);
	const router = useRouter();

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

			router.push('/Recipe_Home');
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
			}
		} catch (error) {
			console.error('Cannot fetch', error);
			setRecipeDetails(null);
		} finally {
			setLoading(false);
		}
	}

	const handleAddFavorites = (getRecipeData) => {
		const cpyFavoriteList = [...favoriteList];

		const index = cpyFavoriteList.findIndex(
			(item) => item.id === getRecipeData.id
		);

		if (index === -1) {
			cpyFavoriteList.push({ ...getRecipeData });
			console.log('favorite status: added');
		} else {
			cpyFavoriteList.splice(index, 1);
			console.log('favorite status: removed');
		}
		setFavoriteList(cpyFavoriteList);
		console.log(favoriteList);
	};

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
				handleAddFavorites,
				favoriteList,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
