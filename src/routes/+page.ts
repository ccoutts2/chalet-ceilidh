import type { PageLoad } from './$types';
import { layoutPageData } from '$lib/data/layout';

export const load: PageLoad = ({ url }) => {
	const layout = url.searchParams.get('layout') ?? 'living';

	const selectedLayout = layoutPageData.filter((s) => s.slug === layout);

	return {
		selectedLayout
	};
};
