'use client';

import { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeGenerator = ({ type }) => {
	const [qrCode, setQrCode] = useState('');
	const [input, setInput] = useState('');

	const handleGenerateQrCode = () => {
		setQrCode(input);
		setInput('');
	};

	return (
		<div className="flex flex-col items-center p-2 max-h-full">
			<p>QrCodeGenerator</p>
			<div>
				<input
					onChange={(e) => setInput(e.target.value)}
					type={type}
					name="qr-code"
					placeholder="Enter your name"
					className="p-1 border-blue-500 border-2 rounded-md mr-2"
				/>
				<button
					className="bg-blue-400 hover:bg-blue-300 p-2 rounded-md my-3"
					disabled={!input || input.trim() === ''}
					onClick={handleGenerateQrCode}
				>
					Generate
				</button>
			</div>
			<div>
				<QRCode id="qr-code-value" value={qrCode} size={256} />
			</div>
		</div>
	);
};

export default QrCodeGenerator;
