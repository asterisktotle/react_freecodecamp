'use client';
import { randomBytes } from 'crypto';
import React, { useState } from 'react';

const RandomColor = () => {
	const [typeColor, setTypeColor] = useState('Hex');
	const [color, setColor] = useState('#b646de');

	const randomColorUtility = (length) => {
		return Math.floor(Math.random() * length);
	};
	const generateHexClr = () => {
		const hexCode = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
		];

		let hexColor = '#';
		for (let i = 0; i < 6; i++) {
			const randomIndex = randomColorUtility(hexCode.length);
			hexColor += hexCode[randomIndex];
		}

		setColor(hexColor);
		console.log(hexColor);
	};

	const generateRgbClr = () => {
		// const randomizer = Math.floor(Math.random() * )
	};

	return (
		<div className={`flex flex-col items-center p-2 h-2/4 gap-3 bg-[${color}]`}>
			<button
				className="bg-green-500 p-3 rounded-md"
				onClick={() => setTypeColor('RGB')}
			>
				Random RGB
			</button>
			<button
				className="bg-blue-700 p-3 rounded-md"
				onClick={() => setTypeColor('Hex')}
			>
				Random Hex
			</button>
			<button
				className="bg-green-700 p-3 rounded-md"
				onClick={
					typeColor === 'Hex' ? () => generateHexClr() : () => generateRgbClr()
				}
			>
				Generate Random {typeColor} Color
			</button>
		</div>
	);
};

export default RandomColor;
