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
			<body className="flex min-h-screen overflow-x-hidden">
				<aside className="sticky top-0 h-screen mr-5 overflow-y-auto">
					<TreeView menus={menus} />
				</aside>
				<main className="flex-1 overflow-y-auto">{children}</main>
			</body>
		</html>
	);
}
