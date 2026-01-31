const CONFIG = {
	name: 'vemacitrind',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,
	timeZone: "Asia/Kolkata",

	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	bentoLayout: 'lists', 

	// weatherKey: 'key here', 
	weatherIcons: 'OneDark', 
	weatherUnit: 'C', 
	language: 'en', 

	trackLocation: true, 
	defaultLatitude: '19.593',
	defaultLongitude: '-99.250',

	autoChangeTheme: false,

	changeThemeByOS: true,

	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',


	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/vemacitrind',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	firstlistsContainer: [
		{
			icon: 'material-symbols:person',
			id: '1',
			links: [
				{
					name: 'Vemacitrind',
					link: 'https://github.com/vemacitrind',
				},
				{
					name: 'Linkedin',
					link: 'https://in.linkedin.com/',
				},
				{
					name: 'HackTheBox',
					link: 'https://app.hackthebox.com/home',
				},
				{
					name: 'Leetcode',
					link: 'https://leetcode.com/problemset/',
				},
			],
		},
		{
			icon: 'fluent:tv-28-regular',
			id: '2',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'KayoAnime',
					link: 'https://kayoanime.com/',
				},
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/drive/shared-with-me',
				},
			],
		},
	],

	secondListsContainer: [
		{
			icon: 'lineicons:open-ai',
			id: '1',
			links: [
				{
					name: 'ChatGPT',
					link: 'https://chatgpt.com/',
				},
				{
					name: 'ChatGPTemp',
					link: 'https://chatgpt.com/?temporary-chat=true',
				},
				{
					name: 'Perplexity',
					link: 'https://www.perplexity.ai/',
				},
				{
					name: 'Gemini',
					link: 'https://gemini.google.com/',
				},
			],
		},
		{
			icon: 'simple-icons:hackaday',
			id: '2',
			links: [
				{
					name: 'ExploitDB',
					link: 'https://www.exploit-db.com/',
				},
				{
					name: 'CrackStation',
					link: 'https://crackstation.net/',
				},
				{
					name: 'GTFOBins',
					link: 'https://gtfobins.github.io/',
				},
				{
					name: 'CyberChef',
					link: 'https://gchq.github.io/CyberChef/',
				},
			],
		},
	],
};
