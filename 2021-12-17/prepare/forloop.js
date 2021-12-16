const config = {
	files: 10,
	serverName: "Zeus",
	os: "windows",
	online: true
};

console.log(config);

console.log(config.serverName);
console.log(config.os);

for (prop in config) {
	const value = config[prop];
	console.log(prop, value);
}

console.log(Object.entries(config));

Object.entries(config).forEach(keyValue => {
	const prop = keyValue[0];
	const value = keyValue[1];
	console.log(`${prop} is ${value}.`);

})