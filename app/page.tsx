import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import QrCodeGenerator from '@/components/QrCodeGenerator';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';
import ScrollIndicator from '@/components/ScrollIndicator';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
	return (
		<main className="flex  flex-col">
			<ThemeSwitch>
				{/* <QrCodeGenerator type={'text'} />
				<Accordion />
				<RandomColor />
				<ReviewsStar numOfStars={5} />
				<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} /> */}
				<ScrollIndicator url={'https://dummyjson.com/products'} />
			</ThemeSwitch>
		</main>
	);
}
