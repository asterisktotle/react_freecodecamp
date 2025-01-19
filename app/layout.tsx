import TreeView from '@/components/tree-view/TreeView';
import './globals.css';
import { menus } from '@/data/tree-view';
import NavBar from '@/components/recipe-app/NavBar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// className="flex min-h-screen overflow-x-hidden"
	return (
		<html lang="en">
			<body>
				{/* <aside className="sticky top-0 h-screen mr-5 overflow-y-auto">
					<TreeView menus={menus} />
				</aside> */}
				<NavBar />
				<main className="flex-1 overflow-y-auto">{children}</main>
			</body>
		</html>
	);
}
