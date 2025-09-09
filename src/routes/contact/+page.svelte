<script lang="ts">
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import CardWrapper from '$lib/components/ui/CardWrapper.svelte';
	import type { Cards } from '$lib/types';

	import {
		House,
		Bed,
		RockingChair,
		ReceiptText,
		CalendarClock,
		Phone,
		Mail
	} from '@lucide/svelte';

	const contactDetails: Cards[] = [
		{
			title: 'Telephone',
			href: 'tel:+44 (0)7980 649054',
			icon: Phone,
			copy: '+44 (0)7980 649054',
			dataLinks: true
		},
		{
			title: 'Email',
			href: 'mailto:zinalskichalets@aol.com',
			icon: Mail,
			copy: ' zinalskichalets@aol.com',
			dataLinks: true
		},
		{
			title: 'Booking Form',
			href: 'tel:+44 (0)7980 649054',
			icon: CalendarClock,
			copy: 'Please click here to download the booking form',
			dataLinks: true
		},
		{
			title: 'Terms & Conditions',
			href: '/terms-and-conditions',
			icon: ReceiptText,
			copy: 'Please click here to view the terms and conditions',
			dataLinks: true
		}
	];
</script>

<PageLayout title="Contact">
	<p>For up to date availability, please contact:</p>
	<p>Fiona Heritage</p>

	<CardWrapper layout="horizontal">
		<Card data={contactDetails} externalLink={true} />
	</CardWrapper>
</PageLayout>
