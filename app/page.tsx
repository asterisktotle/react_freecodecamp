import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import QrCodeGenerator from '@/components/QrCodeGenerator';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';

export default function Home() {
	return (
		<main className="h-screen flex  flex-col">
			<QrCodeGenerator type={'text'} />
			<Accordion />
			<RandomColor />
			<ReviewsStar numOfStars={5} />
			<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
		</main>
	);
}
