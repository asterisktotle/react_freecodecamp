const dummyAPI = {
	showAccordion: true,
	showPopup: true,
	showImageSlider: false,
	showGithubFinder: true,
	showSearchAutoComplete: true,
};

const featureFlagsDataServiceCall = () => {
	return new Promise((resolve, reject) => {
		if (dummyAPI) setTimeout(() => resolve(dummyAPI), 500);
		else reject('error pls try again');
	});
};

export default featureFlagsDataServiceCall;
