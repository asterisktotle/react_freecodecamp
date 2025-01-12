'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const ImageSlider = ({ url, limit, page }) => {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loading, setLoading] = useState(false);

	const fetchImages = async (getUrl) => {
		setLoading(true);
		try {
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (Array.isArray(data)) {
				setImages(data);
			}
			console.log(images);
		} catch (err) {
			console.error('Error fetching images: ', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (url !== '') fetchImages(url);
	}, [url]);

	return (
		<div className="relative flex items-center justify-center ">
			<FontAwesomeIcon
				className=" absolute left-[1rem] sm:right-[18%] md:left-[18%] lg:left-[25%] xl:left-[32%] 2xl:left-[40%] z-10 cursor-pointer bg-slate-600 p-2 rounded-full bg-opacity-50 hover:bg-opacity-80 "
				icon={faArrowLeft}
				inverse
				onClick={() =>
					setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
				}
			/>
			<div className="flex overflow-hidden w-[500px] md:w-[400px] rounded-2xl ">
				<div
					className="flex transition-transform duration-300 ease-out "
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{!loading && images.length ? (
						images.map((imagesItem, index) => (
							<Image
								key={imagesItem.id}
								src={imagesItem.download_url}
								height={500}
								width={500}
								alt={imagesItem.download_url}
								className={`w-full max-h-[300px] sm:max-[400px] lg:max-h-[500px] object-cover transition-opacity duration-300 rounded-xl ${
									currentSlide !== index && 'opacity-50'
								}`}
							/>
						))
					) : (
						<p>Loading data...</p>
					)}
				</div>
			</div>
			<FontAwesomeIcon
				icon={faArrowRight}
				className="absolute right-[1rem] sm:right-[18%] md:right-[18%] lg:right-[25%] xl:right-[32%] 2xl:right-[40%] z-10 cursor-pointer bg-slate-700 bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
				onClick={() =>
					setCurrentSlide((prev) => (prev + 1 + images.length) % images.length)
				}
				inverse
			/>
			<span className="absolute left-0 right-0 bottom-2 flex justify-center gap-2 ">
				{images && images.length
					? images.map((_, index) => (
							<button
								key={index}
								className={`relative size-2 mr-1 rounded-full ${
									currentSlide === index ? 'bg-white' : 'bg-slate-500'
								}`}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
};

export default ImageSlider;
