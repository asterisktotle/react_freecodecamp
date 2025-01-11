'use client';
import React, { useState } from 'react';
import { data } from '@/data/data';

const DisplayContent = ({ data }) => {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelect, setEnableMultiSelect] = useState(false);
	const [multiple, setMultiple] = useState([]);

	const handleSingleSelection = (selectedCurrentId) => {
		setSelected(selectedCurrentId === selected ? null : selectedCurrentId);
	};

	const handleMultipleSelection = (selectedCurrentId) => {
		let multipleSelected = [...multiple];
		const findIndexOfSelectedId = multipleSelected.indexOf(selectedCurrentId);

		if (findIndexOfSelectedId === -1) multipleSelected.push(selectedCurrentId);
		else multipleSelected.splice(findIndexOfSelectedId, 1);

		setMultiple(multipleSelected);
	};

	return (
		<div>
			<button
				onClick={() => setEnableMultiSelect(!enableMultiSelect)}
				className={`p-2 text-white rounded-lg ${
					enableMultiSelect ? ' bg-blue-500' : 'bg-blue-900'
				}`}
			>
				Enable Multi-selection
			</button>

			{data && data.length > 0 ? (
				data.map((dataItem) => (
					<div
						key={dataItem.id}
						className=" bg-blue-950 text-white border-2 my-2 p-3 lg:w-[40rem]"
					>
						<div
							className="flex items-center justify-between w-full"
							onClick={
								enableMultiSelect
									? () => handleMultipleSelection(dataItem.id)
									: () => handleSingleSelection(dataItem.id)
							}
						>
							<h3>{dataItem.question}</h3>
							<span className="ml-2 cursor-pointer">
								{selected === dataItem.id ||
								multiple.indexOf(dataItem.id) !== -1
									? '-'
									: '+'}
							</span>
						</div>
						{/* check if the item is selected (true) or is in the array */}
						{enableMultiSelect
							? multiple.indexOf(dataItem.id) !== -1 && (
									<div className="font-bold">{dataItem.answer}</div>
							  )
							: selected === dataItem.id && (
									<div className="font-bold">{dataItem.answer}</div>
							  )}
					</div>
				))
			) : (
				<div>No data found</div>
			)}
		</div>
	);
};

const Accordion = () => {
	return (
		<div className="flex flex-col items-center p-2 max-h-full">
			<DisplayContent data={data} />
		</div>
	);
};

export default Accordion;
