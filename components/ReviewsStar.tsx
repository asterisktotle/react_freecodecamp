'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewsStar = ({ numOfStars = 5 }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (getCurrentIndex) => {
		setRating(getCurrentIndex);
		console.log('click');
	};
	const handleMouseEnter = (getCurrentIndex) => {
		setHover(getCurrentIndex);
		console.log(`mouse move: ${getCurrentIndex}`);
	};
	const handleMouseLeave = () => {
		setHover(rating);
	};

	return (
		<div className="flex justify-center gap-2 items-center p-2 max-h-full">
			<div className="mb-3">
				<h3 className="font-bold">Rate me</h3>
				<span>
					{[...Array(numOfStars)].map((_, index) => {
						index += 1;

						return (
							<FontAwesomeIcon
								key={index}
								icon={faStar}
								size="2x"
								color={index <= (hover || rating) ? 'yellow' : 'black'}
								onClick={() => handleClick(index)}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => handleMouseLeave()}
							/>
						);
					})}
				</span>
				<div>
					{rating > 0 ? (
						rating >= 3 ? (
							<p>Thank you!</p>
						) : (
							<p>I will improve more!</p>
						)
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ReviewsStar;
