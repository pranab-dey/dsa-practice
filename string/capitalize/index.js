function capitalize(str) {
	return str
		.match(/\S+|\s+/g)
		.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
		.join('');
}

console.log(capitalize('every word in this sentence should be capitalized!'));
// Every Word In This Sentence Should Be Capitalized!
