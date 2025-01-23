import ListOfRecipes from '@/components/recipe-app/ListOfRecipes';

// TODO: FIX THE NAVBAR LOCAL STORAGE
// UPDATE THE KEY 'TAB' TO HOME PAGE WHEN FORM SUBMITTED
const HomePage = () => {
	return (
		<div className="w-full px-2">
			<ListOfRecipes />
		</div>
	);
};

export default HomePage;
