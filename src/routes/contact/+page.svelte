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
	<div class="py-8">
		<p>For up to date availability, please contact:</p>
		<p class="text-xl">Fiona Heritage</p>
	</div>

	<div class="lg:invisible lg:hidden lg:opacity-0">
		<CardWrapper layout="vertical">
			<Card data={contactDetails} externalLink={true} />
		</CardWrapper>
	</div>

	<div class="invisible hidden opacity-0 lg:visible lg:flex lg:opacity-100">
		<CardWrapper layout="horizontal">
			<Card data={contactDetails} externalLink={true} />
		</CardWrapper>
	</div>

	<div class="flex flex-col gap-4 pt-8">
		<p>
			The prices are for exclusive occupancy of Chalet Ceilidh for seven nights and includes bath
			linen and beds made on arrival, complimentary toiletries and concierge services available
			prior to and during your stay.
		</p>
		<p>
			Your reservation will only be confirmed after receipt of your signed booking form and deposit.
		</p>
		<p>
			The final balance is due 8 weeks before your holiday. Payment can only be made by bank
			transfer.
		</p>
	</div>
</PageLayout>
