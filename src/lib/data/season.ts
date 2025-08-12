interface CarouselSlides {
	src: string;
	caption: string;
	alt: string;
}

interface Season {
	slug: string;
	title: string;
	pageDescription: string;
	carouselItems: CarouselSlides[];
	features: string[];
	copy: string[];
}

export const seasonPageData: Season[] = [
	{
		slug: 'winter',
		title: 'Winter',
		pageDescription:
			'You know you are heading somewhere special when you leave the valley floor in Sierre and start the ascent up the long and winding road to Zinal. When the road runs out, you have reached somewhere that nestles between heaven and earth...welcome to Zinal!',
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
			'220km of Skiing and Snow Boarding',
			'44 Lifts',
			'Zinal and Grimentz linked',
			'3 ski areas covered by 1 Ski Pass',
			'Free ski shuttle bus linking Grimentz, St.Luc and Vercorin',
			'Spectacular Scenery',
			"“Vieux Village” with it's ancient barns and buildings",
			'Fabulous Skiing and Uncrowded pistes',
			'Extensive Off-Piste',
			'Mountain Guides',
			'High Altitude Snow Sure Skiing',
			'Long Ski Season',
			'Paragliding, Snow Shoeing, Cross Country Trails, Sledging, Ice Climbing',
			'Ice Rink',
			'Indoor Swimming Pool and Spa',
			'Massage and Beauty Treatments',
			"Children's Creche",
			'Family friendly',
			'Childrens Snow Garden and Sledging',
			'Charming Chocolate Box Villages',
			'Regional Wine and Speciality Cuisine'
		],
		copy: [
			"At 1670m Zinal sits at the top of the ski region known as the Val D'Anniviers, one of the most stunning areas of Switzerland. Still relatively unknown, the Val D'Anniviers includes the villages of Grimentz, St Luc, Chandolin and Vercorin.",
			'Gazing down over the village of Zinal, keeping a watchful eye, are the majestic peaks of the famous “Imperial Crown”. These are five mountains all over 4000m high, making the scenery here truly spectacular and worthy of visiting alone but there is so much more to discover...',
			"From the children's snow garden and family friendly runs around Sorebois to extensive off piste skiing with mountain guides for the more adventurous, there are runs to suit every level. As well as a free ride area and avalanche training centre, Zinal also has 19km of cross country skiing which takes place in a beautiful setting next to the river and 1.5km of track is flood lit in the evening.",
			'Other winter activities include snow shoe walks, winter hiking trails, ice climbing, paragliding, tobogganing and ice skating.',
			'The ski area of Zinal and Grimentz are linked by telecabine and for the more experienced skier, there is one of the longest runs in the Alps from Zinal to Grimentz. The free ski shuttle bus also links Grimentz as well as the St Luc/Chandolin ski area and last but not least,Vercorin with 35km of slopes and renowned for excellent paragliging.',
			'From the wide pisted runs of Grimentz and St Luc, to skiing through the trees in Vercorin, they are all unique and offer a huge variety of terrain to explore and enjoy.',
			'The non skiing members of your family or group need not feel left out as apart from the spectacular scenery and picture postcard villages to visit, they may not even want to leave the comfort of the chalet.',
			'From relaxing in the sauna or hot tub, enjoying the panoramic views from the sun deck, catching up with news or sport, watching a block buster movie or just settling down with a good book in front of the log fire.',
			"Zinal also boasts a the newly refurbished indoor swimming pool and spa accessible summer and winter. The indoor pool and spa consist of a semi Olympic pool, a children's pool and a wellness spa with harman, sauna and jacuzzi and only a few steps from the chalet.",
			'The larger ski resorts of Verbier and Crans Montana are just over an hour away by car.',
			'Although small, the village of Zinal has immense charm with several restaurants and bars, two supermarkets as well as a boulangerie/patisserie, tabac, gift shop, massage and beauty salon, post office, tourist office as well as ski hire and mountain wear shops…in fact you may never want to leave!'
		]
	},

	{
		slug: 'summer',
		title: 'Summer',
		pageDescription:
			'During the summer changeover days are flexible and Chalet Ceilidh offers the perfect retreat for families, friends or couples looking for a short break or week end away.',
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
			'Breathtaking Walks and Hiking Paths',
			'Private and group guided climbs to the Alpine summits',
			'Mountain Biking and Cycling Trails',
			'Guided Tours',
			'Nature Trails',
			'Rock Climbing',
			'Paragliding Flights',
			'Tennis',
			'Mini Golf',
			'Outdoor and Indoor Swimming Pools',
			'Picnics',
			'Wellbeing and Spa Hotel',
			'Wine Tasting',
			'Therman Resorts'
		],
		copy: [
			"Throughout the summer months there are a variety of alpine sports and activities to choose from as well as complete relaxation. Summers are hot and the Val d'annivier abounds with the colour of flowers, sunshine and the sound of cow bells as they graze the high pastures. With the arrival of autumn, the scenery is just as spectacular as the trees take on their autumnal colours of gold's, reds and shades of orange.",
			'From June to October the tourist tax covers free use of the cable cars, gondolas and buses as well as activities ranging from tennis, mini golf, swimming pools,  guided tours,  and the free lifts give access to the high mountain footpaths and mountain bike trails.',
			'Enjoy world class golf at Crans Montana or visit the largest thermal spa resort in the Alps at Leukerbad, both within an hours drive from Zinal.',
			'Visit the beauty of the Italian lakes, a stunning two hour drive away from the chalet.'
		]
	}
];
