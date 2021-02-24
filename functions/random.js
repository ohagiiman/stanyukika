const fetch = require('node-fetch');

const ENDPOINT = 'https://stanyukika.com/_songs.json';

exports.handler = async (event, context) => {
	const request = await fetch(ENDPOINT, {
		headers: { Accept: 'application/json' },
	});

	const { songs } = await request.json();

	const url = songs[~(Math.random() * songs.length)];

	return {
		statusCode: 301,
		body: `Location:${url}`,
		headers: {
			Location: `${url}`,
		},
	};
};