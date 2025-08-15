import type { PageLoad } from './$types';
import { seasonPageData } from '$lib/data/season';

export const load: PageLoad = ({ params }) => {
	const { season } = params;

	const pageContent = seasonPageData.find((pageData) => pageData.slug === season);

	if (!pageContent) {
		throw new Error('Page not found');
	}

	return {
		pageContent
	};
};
