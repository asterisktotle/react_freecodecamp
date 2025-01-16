'use client';

import ListMenu from './ListMenu';

const TreeView = ({ menus }) => {
	return (
		<div className="bg-slate-300 w-fit p-4 h-screen sticky">
			<p className="font-extrabold text-2xl">TreeView</p>
			<ListMenu list={menus} />
		</div>
	);
};

export default TreeView;
