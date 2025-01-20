import TreeView from '@/components/tree-view/TreeView';
import './globals.css';
import { menus } from '@/data/tree-view';
import GlobalState from '@/components/recipe-app/Context';
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
				<GlobalState>
					<NavBar />
					{children}
				</GlobalState>
			</body>
		</html>
	);
}
{
	/* <aside className="sticky top-0 h-screen mr-5 overflow-y-auto">
	<TreeView menus={menus} />
</aside> */
}

// this wraps the children
{
	/* <main className="flex-1 overflow-y-auto"></main> */
}
