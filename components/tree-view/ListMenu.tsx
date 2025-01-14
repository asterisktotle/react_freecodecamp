import React from 'react';
import ItemMenu from './ItemMenu';

const ListMenu = ({ list = [] }) => {
	return (
		<ul>
			{list.map((item, index) => (
				<ItemMenu item={item} key={index} />
			))}
		</ul>
	);
};

export default ListMenu;
