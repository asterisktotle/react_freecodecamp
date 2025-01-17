'use client';

import { useState } from 'react';
import PopupContent from './PopupContent';

const Popup = () => {
	const [isPopUp, setIsPopUp] = useState(false);
	return (
		<div>
			<button
				className="border-2 border-green-700 p-1 hover:bg-green-100"
				onClick={() => setIsPopUp(!isPopUp)}
			>
				Click PopUp
			</button>
			<span className="absolute z-50 left-0 top-0">
				{isPopUp && (
					<PopupContent
						closeButton={
							<button onClick={() => setIsPopUp(!isPopUp)}> Close X</button>
						}
					/>
				)}
			</span>
		</div>
	);
};

export default Popup;
