import type { PageLoad } from './$types';
import { layoutPageData } from '$lib/data/layout';

export const load: PageLoad = ({ params }) => {
	const { layout } = params;

	const pageContent = layoutPageData.find((pageData) => pageData.slug === layout);

	if (!pageContent) {
		throw new Error('Page not found');
	}

	return {
		pageContent
	};
};
