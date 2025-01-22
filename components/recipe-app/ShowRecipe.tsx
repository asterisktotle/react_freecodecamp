import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from './Context';

interface ShowRecipeProps {
	id: number;
	name: string;
	image: string;
	ingredients: string[];
	showRecipe?: boolean;
}

const ShowRecipe = ({
	id,
	name,
	image,
	ingredients,
	showRecipe = false,
}: ShowRecipeProps) => {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error('ShowRecipe must be used within a GlobalProvider');
	}

	return (
		<div
			className={`p-2 rounded-lg shadow-md  w-fit  overflow-hidden flex h-full hover:bg-green-600 hover:text-white transition-all duration-500 ease-in-out 
				${
					showRecipe
						? '   flex-col sm:justify-evenly sm:flex-row sm:items-center xl:w-[25rem] lg:min-w-full   sm:w-[30rem] lg:grid lg:grid-cols-2'
						: '  flex-col justify-center item-center '
				}`}
			key={id}
		>
			<div
				className={` rounded-lg overflow-hidden p-3 ${
					showRecipe ? 'w-fit size-96  h-fit ' : 'relative w-full h-full '
				}`}
			>
				<Image
					className="overflow-hidden object-cover rounded-lg hover:scale-125 transition-transform duration-300 h-full"
					src={image}
					height={300}
					width={300}
					alt={name}
				/>
			</div>

			<div className={`flex flex-col `}>
				<h2 className=" font-extrabold text-base text-center cursor-pointer sm:text-nowrap">
					{name}
				</h2>

				{!showRecipe && (
					<Link
						className="p-3 py-2 self-center text-center cursor-pointer transition-all duration-500 hover:bg-white hover:text-green-600 text-black font-semibold rounded-lg w-[90%]"
						href={`/Recipe_Details/${id}`}
					>
						Show recipes
					</Link>
				)}

				{showRecipe && ingredients && (
					<div className="p-2 sm:p-0">
						<p className="font-semibold">Ingredient</p>
						<ul className="ml-6 ">
							{ingredients.map((ingredient, index) => (
								<li className="list-disc" key={index}>
									{ingredient}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShowRecipe;
