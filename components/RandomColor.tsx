'use client';
import { randomBytes } from 'crypto';
import React, { useState } from 'react';

const RandomColor = () => {
	const [typeColor, setTypeColor] = useState('Hex');
	const [color, setColor] = useState('#000000');

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
	};

	const generateRgbClr = () => {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);

		setColor(`rgb(${r}, ${g}, ${b})`);
		console.log('rgb click');
	};

	return (
		<div
			className="flex flex-col items-center justify-center p-2 h-2/4 gap-3"
			style={{ backgroundColor: color }}
		>
			<button
				className=" mix-blend-plus-darker bg-green-500 p-3 rounded-md"
				onClick={() => setTypeColor('RGB')}
			>
				Random RGB
			</button>
			<button
				className="mix-blend-plus-darker bg-blue-700 p-3 rounded-md"
				onClick={() => setTypeColor('Hex')}
			>
				Random Hex
			</button>
			<button
				className={`p-3 rounded-md ${
					typeColor === 'Hex' ? 'bg-blue-700' : 'bg-green-500'
				}`}
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
