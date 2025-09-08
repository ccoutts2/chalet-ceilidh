import { type Icon as IconType } from '@lucide/svelte';

export type Cards = {
	title: string;
	href?: string;
	icon: typeof IconType;
	copy: string;
	dataLinks?: boolean;
};
