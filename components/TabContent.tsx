'use client';
import { useState } from 'react';

const TabContent = ({ tabsContent, onChange }) => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleOnClick = (getCurrentIndex) => {
		setCurrentTabIndex(getCurrentIndex);
		onChange(currentTabIndex);
	};

	return (
		<div className="container w-fit border-2">
			<div className="flex  flex-grow  border-2  bg-green-500 ">
				{tabsContent && tabsContent.length > 0 ? (
					tabsContent.map((tab, index) => (
						<div key={tab.id} onClick={() => handleOnClick(index)}>
							<span
								className={` flex 
									${currentTabIndex === index ? 'bg-yellow-400' : 'bg-green-500'}`}
							>
								{tab.label}
							</span>
						</div>
					))
				) : (
					<p>no data</p>
				)}
			</div>
			<div>
				{tabsContent[currentTabIndex] &&
				tabsContent[currentTabIndex].content ? (
					<span className="flex w-[30rem]">
						{tabsContent[currentTabIndex].content}
					</span>
				) : null}
			</div>
		</div>
	);
};

export default TabContent;
