export const menus = [
	{
		label: 'Home',
		to: '/',
	},
	{
		label: 'Profile',
		to: '/',
		children: [
			{
				label: 'Details',
				to: '/',
				children: [
					{
						label: 'Location',
						to: '/',
					},
				],
			},
		],
	},
	{
		label: 'Settings',
		to: '/',
		children: [
			{
				label: 'Account',
				to: '/',
			},
			{
				label: 'Security',
				to: '/',
				children: [
					{
						label: 'Login',
						to: '/',
					},
					{
						label: 'Register',
						to: '/',
					},
				],
			},
		],
	},
	{
		label: 'Shop',
		to: '/Dummy_Product',
	},
];
