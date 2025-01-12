import Accordion from '@/components/Accordion';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';

export default function Home() {
	return (
		<main className="h-screen">
			<Accordion />
			<RandomColor />
			<ReviewsStar numOfStars={5} />
		</main>
	);
}
