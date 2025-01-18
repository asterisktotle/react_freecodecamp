'use client';
import { createContext, useEffect, useState } from 'react';
import featureFlagsDataServiceCall from './featureData';

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [enabledFlags, setEnabledFlags] = useState({});

	const fetchFeatureFlags = async () => {
		try {
			setLoading(true);
			const response = await featureFlagsDataServiceCall();
			setEnabledFlags(response);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchFeatureFlags();
	}, []);
	return (
		<FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>
			{children}
		</FeatureFlagsContext.Provider>
	);
};

export default FeatureFlagGlobalState;
