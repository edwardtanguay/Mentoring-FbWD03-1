
const colors = ["brown","red", "blue", "green", "yellow", "yellow", "black"];

colors.forEach(color => {
	if (color === 'red') {
		console.log('warning!');
	} else {
		console.log('neutral');
	}
})