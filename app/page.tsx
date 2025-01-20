import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import QrCodeGenerator from '@/components/QrCodeGenerator';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';
import ThemeSwitch from '@/components/ThemeSwitch';
import TabsTest from '@/components/TabsTest';
import Popup from '@/components/Popup';
import GithubFinder from '@/components/GithubFinder';
import SearchAutoComplete from '@/components/SearchAutoComplete';
import FeatureFlags from '@/components/feature-flag/FeatureFlags';
import FeatureFlagGlobalState from '@/components/feature-flag/FeatureFlagContext';
import ListOfRecipes from '@/components/recipe-app/ListOfRecipes';

import NavBar from '@/components/recipe-app/NavBar';
import ShowRecipe from '@/components/recipe-app/ShowRecipe';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<ListOfRecipes />
		</main>
	);
}

{
	/* <ThemeSwitch>
				<Popup />
				<SearchAutoComplete />
				<GithubFinder />
				<TabsTest />
				<QrCodeGenerator type={'text'} />
				<Accordion />
				<RandomColor />
				<ReviewsStar numOfStars={5} />
				<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
			</ThemeSwitch> */
}
{
	/* <FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState> */
}
