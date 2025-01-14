'use client';

import ListMenu from './ListMenu';

const TreeView = ({ menus }) => {
	return (
		<div className="bg-blue-500 w-fit p-4">
			<p className="font-extrabold text-2xl">TreeView</p>
			<ListMenu list={menus} />
		</div>
	);
};

export default TreeView;
