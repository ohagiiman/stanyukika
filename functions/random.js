exports.handler = async (event, context) => {
	const songs = {
		i_feel_love: 'https://youtu.be/xe605QH9BNs',
		soul_lady: 'https://youtu.be/lxPndeAzfwI',
		neon: 'https://youtu.be/Mm2PW9CZHJc',
		yesterday: 'https://youtu.be/_cOFCiiQIvI',
		a_day_for_love: 'https://youtu.be/CheuV7x7l5M',
		pit_a_pet: 'https://youtu.be/RIKTYUWQOcs',
		cherries_jubiles: 'https://youtu.be/giOCueVDtfg',
		shade: 'https://youtu.be/rK69AriTIZc',
		cherries_jubiles_aucustic: 'https://youtu.be/ypDTAszCZAk',
		orange_road: 'https://youtu.be/Uoutn3GVHqs',
	};

	const url = Object.values(songs)[~~(Math.random() * Object.values(songs).length)];

	return {
		statusCode: 301,
		headers: {
			Location: url,
		},
	};
};
