interface CarouselSlides {
	src: string;
	caption: string;
	alt: string;
}

interface Layout {
	slug: string;
	title: string;
	pageDescription: string;
	carouselItems: CarouselSlides[];
	features: string[];
	floorPlan: string;
	creatureComforts?: string[];
	copy: string[];
}

export const layoutPageData: Layout[] = [
	{
		slug: 'living',
		title: 'Living',
		pageDescription:
			'The living area of this luxury chalet has been tastefully designed and furnished. The glass enclosed log fire is the focal point of the seating area surrounded by large sumptuous sofas. The use of old wood, exposed stone and low ceilings makes this a very cosy and comfortable place to relax in.',
		carouselItems: [
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-1.jpg',
				caption: 'living area 1',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
				caption: 'living area 2',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-3.jpg',
				caption: 'living area 3',
				alt: ''
			}
		],
		features: [
			'Panoramic views',
			'Floor to ceiling windows',
			'Wrap around balcony',
			'Large south facing sun deck',
			'Hot Tub',
			'Outdoor furniture',
			'BBQ',
			'Modern stainless steel kitchen',
			'Ski & Boot Room'
		],
		floorPlan: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
		creatureComforts: [
			'Log fire with complimentary firewood',
			'Sumptuous soft furnishings',
			'Flat screen TV, surround sound, Blu-ray DVD',
			'WiFi',
			'Nespresso Machine',
			'Heated ski boot rack'
		],
		copy: [
			"By contrast, the floor to ceiling windows fill the dining area with plenty of light giving spectacular views of the snow covered peaks and the Val d'Anniviers whilst seated at the large square shaped table.",
			'Stainless steel and wood give the kitchen a very contemporary feel. The kitchen is very well equipped with all modern appliances including a large American style fridge/freezer and Nespresso Machine.',
			'French doors lead out to the large south facing sun terrace that extends around the chalet.'
		]
	},
	{
		slug: 'sleeping',
		title: 'Sleeping',
		pageDescription:
			'Individually designed bedrooms on the lower ground floor of Chalet Ceilidh. They all have glass doors leading to the garden and all have stunning views of the mountains',
		carouselItems: [
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-1.jpg',
				caption: 'living area 1',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
				caption: 'living area 2',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-3.jpg',
				caption: 'living area 3',
				alt: ''
			}
		],
		features: [
			'Individually designed bedrooms',
			'Gorgeous views',
			'Access to outside garden',
			'King size beds with zip and link twins',
			'Large walk-in rainfall showers',
			'Heated towel rails',
			'Individually controlled under floor heating'
		],
		floorPlan: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
		creatureComforts: [
			'Finest quality bed and bath linen',
			'“Just Like Down” anti allergenic duvets and pillows',
			'Fluffy robes and slippers',
			'Hairdryers',
			'Complimentary bath products',
			'Faux fur throws and cushions'
		],
		copy: [
			'One double room with king size bed has an en-suite shower room while the two other bedrooms share a bathroom and separate walk-in shower in the sauna room.',
			'The top floor of this Zinal chalet hosts the master bedroom and luxurious en suite bathroom featuring a double ended bath and walk in shower. A glass door leads outside to a small balcony with fabulous views up and down the valley.',
			'For any domestic chores, there is a well equipped laundry room with washing machine, tumble drier, iron and ironing board.'
		]
	},
	{
		slug: 'relaxing',
		title: 'Relaxing',
		pageDescription:
			'For total relaxation enjoy the scent of eucalyptus or pine in the Finnish sauna. Soothe away the stresses and strains of a hard day on the slopes in the outdoor hot tub and admire the spectacular scenery or gaze at the stars come evening.',
		carouselItems: [
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-1.jpg',
				caption: 'living area 1',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
				caption: 'living area 2',
				alt: ''
			},
			{
				src: '/assets/images/layout/living/swiss-ski-chalet-3.jpg',
				caption: 'living area 3',
				alt: ''
			}
		],
		features: [
			'Hot tub',
			'Sauna with aromatic oils',
			'Outdoor furniture for al fresco eating and dining',
			'Garden for playing and building snowmen',
			'Children’s sledges',
			'Galleried landing',
			'Charming mezzanine tucked under the eaves',
			'Comfy leather sofas',
			'PlayStation 3 and games',
			'Smart TV, DVD with Sound Bar'
		],
		floorPlan: '/assets/images/layout/living/swiss-ski-chalet-2.jpg',
		copy: [
			'Relax in one of the “Muskoka” chairs on the large south facing deck and simply enjoy the view, crystal clear air and warmth of the sun or snuggle up by the log fire with a glass of wine and a good book. The galleried landing and mezzanine lounge is furnished with large comfy leather sofas and is the perfect quiet retreat from the bustle of downstairs to read or simply relax.',
			'For the children, this is also a great place they can escape to after dinner to play board or play station games, watch TV or select a movie which they can settle down and watch together.'
		]
	}
];
