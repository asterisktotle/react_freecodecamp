'use client';
import { useState } from 'react';
import Link from 'next/link';

import ListMenu from './ListMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const ItemMenu = ({ item }) => {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	const handleToggleChildren = (getCurrentLabel) => {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
	};

	return (
		<li>
			<div className="flex gap-2 justify-between">
				<Link href={item.to}>{item.label}</Link>
				{item && item.children && item.children.length ? (
					<span
						className="cursor-pointer hover:font-bold"
						onClick={() => handleToggleChildren(item.label)}
					>
						{displayCurrentChildren[item.label] ? (
							<FontAwesomeIcon icon={faChevronDown} />
						) : (
							<FontAwesomeIcon icon={faChevronLeft} />
						)}
					</span>
				) : null}
			</div>

			{item &&
			item.children &&
			item.children.length > 0 &&
			displayCurrentChildren[item.label] ? (
				<ListMenu list={item.children} />
			) : null}
		</li>
	);
};

export default ItemMenu;
