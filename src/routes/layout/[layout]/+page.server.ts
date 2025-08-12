import type { PageServerLoad } from './$types';
import { layoutPageData } from '$lib/data/layout';

export const load: PageServerLoad = ({ params }) => {
	const { layout } = params;

	const pageContent = layoutPageData.find((pageData) => pageData.slug === layout);

	if (!pageContent) {
		throw new Error('Page not found');
	}

	return {
		pageContent
	};
};
