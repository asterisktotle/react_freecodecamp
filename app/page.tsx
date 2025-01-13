import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="h-screen">
			<Accordion />
			<RandomColor />
			<ReviewsStar numOfStars={5} />
			<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
			<Link href="./Dummy_Product">Product List</Link>
		</main>
	);
}
