function reverseInteger(n) {
	const reversedStr = n.toString().split('').reverse().join('');

	return parseInt(reversedStr) * Math.sign(n);
}
