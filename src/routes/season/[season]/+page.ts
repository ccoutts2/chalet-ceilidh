import type { PageLoad } from './$types';
import { seasonPageData } from '$lib/data/season';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const { season } = params;

	const pageContent = seasonPageData.find((pageData) => pageData.slug === season);

	if (!pageContent) {
		return error(404);
	}

	return {
		pageContent
	};
};
