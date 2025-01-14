'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadMore = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}&select=title,images,price,`
			);

			if (!response.ok) {
				let errorMessage;

				try {
					const errorData = await response.json();
					errorMessage =
						errorData.message || `HTTP error! status: ${response.status}`;
				} catch (e) {
					errorMessage = `HTTP error! status:${response.status}`;
				}

				switch (response.status) {
					case 400:
						throw new Error(`Bad request: ${errorMessage}`);
					case 404:
						throw new Error('Product not found');
					case 429:
						throw new Error('Too many request - Please try again');
					default:
						throw new Error(errorMessage);
				}
			}

			const data = await response.json();

			if (!Array.isArray(data.products)) {
				throw new Error('Invalid response format');
			}

			setProducts((prevData) => [...prevData, ...data.products]);
		} catch (error) {
			console.error(error);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisableButton(true);
	}, [disableButton]);

	const ProductSection = () => {
		return products && products.length
			? products.map((item, index) => (
					<div
						key={`${item.id}-${item.title}-${index}`}
						className="p-5 border-4 border-gray-400 flex flex-col justify-between gap-[10px]"
					>
						<Image
							src={item.images[0]}
							alt={item.title}
							height={400}
							width={200}
							quality={40}
							loading="lazy"
							className="border-2 border-gray-400 h-[10rem]"
						/>
						<h2 className="font-bold">{item.title}</h2>
						<span className="flex justify-between">
							<p>${item.price}</p>{' '}
							<button className="border-2 px-2 py-1 rounded-md bg-green-600 hover:bg-green-500 text-white">
								Buy
							</button>
						</span>
					</div>
			  ))
			: null;
	};

	if (loading) {
		return <div>Loading products please wait...</div>;
	}

	return (
		<div className="container flex flex-col gap-[20px] items-center">
			<h1 className="font-bold text-2xl">Online Store</h1>
			<section className="grid lg:grid-cols-5 grid-cols-4 gap-[10px] size-[20rem] lg:size-[auto]">
				<ProductSection />
			</section>
			<button
				disabled={disableButton}
				onClick={() => setCount((prevCount) => prevCount + 1)}
				className="border-2 p-2 w-fit"
			>
				{disableButton ? 'You have reached to 100 products' : 'Load more'}
			</button>
		</div>
	);
};

export default LoadMore;
