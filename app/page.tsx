import Accordion from '@/components/Accordion';
import ImageSlider from '@/components/ImageSlider';
import RandomColor from '@/components/RandomColor';
import ReviewsStar from '@/components/ReviewsStar';
import TreeView from '@/components/tree-view/TreeView';

import { menus } from '@/data/tree-view';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="h-screen flex  flex-col">
			<Link
				className="self-center p-2 bg-green-500 rounded-md mt-4"
				href="./Dummy_Product"
			>
				Product List
			</Link>
			<TreeView menus={menus} />
			<Accordion />
			<RandomColor />
			<ReviewsStar numOfStars={5} />
			<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
		</main>
	);
}
