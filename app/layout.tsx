import TreeView from '@/components/tree-view/TreeView';
import './globals.css';
import { menus } from '@/data/tree-view';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex">
				<div className="sticky top-0 h-screen">
					<TreeView menus={menus} />
				</div>
				<div className="flex-1">{children}</div>
			</body>
		</html>
	);
}
