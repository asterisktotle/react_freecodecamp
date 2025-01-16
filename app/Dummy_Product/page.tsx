import LoadMore from '@/components/LoadMore';
import ThemeSwitch from '@/components/ThemeSwitch';

const Product = () => {
	return (
		<ThemeSwitch>
			<div className="m-2 flex max-h-max justify-center">
				<LoadMore />
			</div>
		</ThemeSwitch>
	);
};

export default Product;
