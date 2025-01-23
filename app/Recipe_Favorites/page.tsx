import Favorites from '@/components/recipe-app/Favorites';

const FavoriteRecipePage = () => {
	return (
		<div className="w-full px-2 flex flex-col justify-center items-center">
			<h1 className="font-extrabold text-[1.6rem]">Favorite food</h1>
			<Favorites />
		</div>
	);
};

export default FavoriteRecipePage;
