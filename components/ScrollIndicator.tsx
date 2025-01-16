'use client';

import { useEffect, useState } from 'react';

const ScrollIndicator = ({ url }) => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const fetchUrl = async () => {
		try {
			setLoading(true);
			const resp = await fetch(url);

			if (!resp.ok) {
				console.error(`Request is not okay`);
			}
			const data = await resp.json();

			if (data && data.products.length > 0) {
				setProducts(data.products);
			}
			console.log(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handleScrollPercentage = () => {
		console.log(
			document.body.scrollTop,
			document.documentElement.scrollTop,
			document.documentElement.scrollHeight,
			document.documentElement.clientHeight
		);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollPercentage);
		handleScrollPercentage();

		return () => window.removeEventListener('scroll', handleScrollPercentage);
	}, []);

	useEffect(() => {
		if (url && url.length) fetchUrl();
	}, []);

	const ProductList = () => {
		return products && products.length > 0 ? (
			products.map((product) => <li key={product.id}>{product.title}</li>)
		) : (
			<p>No products available</p>
		);
	};

	return (
		<div>
			<div> bar indicator</div>
			{!loading && <ProductList />}
		</div>
	);
};

export default ScrollIndicator;
