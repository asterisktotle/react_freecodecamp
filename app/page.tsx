import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';

export default function Home() {
	return (
		<main className="h-screen">
			<Accordion />
			<RandomColor />
			<ReviewsStar numOfStars={5} />
			<ImageSlider url="https://picsum.photos/v2/list" limit={5} page={1} />
		</main>
	);
}
