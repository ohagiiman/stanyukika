exports.handler = async (event, context) => {
	const songs = ['https://umai.pw'];
	const url = songs[~~(Math.random() * songs.length)];

	return {
		statusCode: 301,
		headers: {
			Location: url,
		},
	};
};
