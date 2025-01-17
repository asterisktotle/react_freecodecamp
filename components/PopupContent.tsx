const PopupContent = ({ id, header, body, footer, closeButton }) => {
	return (
		<div
			className="bg-green-300 p-3 flex justify-center items-center flex-col w-screen  h-screen"
			id={(id && id) || 'modal'}
		>
			{closeButton}
			<div>{(header && header) || 'Header'}</div>
			<div>{(body && body) || 'Body'}</div>
			<div>{(footer && footer) || 'Footer'}</div>
		</div>
	);
};

export default PopupContent;
