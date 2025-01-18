'use client';
import React, { useContext } from 'react';
import Accordion from '../Accordion';
import GithubFinder from '../GithubFinder';
import ImageSlider from '../ImageSlider';
import Popup from '../Popup';
import { FeatureFlagsContext } from './FeatureFlagContext';

const FeatureFlags = () => {
	const { enabledFlags, loading } = useContext(FeatureFlagsContext);

	const componentsToRender = [
		{
			key: 'showAccordion',
			component: <Accordion />,
		},
		{
			key: 'showPopup',
			component: <Popup />,
		},
		{
			key: 'showImageSlider',
			component: (
				<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
			),
		},
		{
			key: 'showGithubFinder',
			component: <GithubFinder />,
		},
	];

	//get the value of the key of the enabledFlags : true / false
	const checkEnabledFlags = (getCurrentKey: string) => {
		return enabledFlags[getCurrentKey];
	};

	if (loading) return <h1>Loading page... </h1>;

	return (
		<div>
			<h1>FeatureFlags</h1>
			{componentsToRender.map((componentItem) =>
				checkEnabledFlags(componentItem.key) ? (
					<React.Fragment key={componentItem.key}>
						{componentItem.component}
					</React.Fragment>
				) : null
			)}
		</div>
	);
};

export default FeatureFlags;
