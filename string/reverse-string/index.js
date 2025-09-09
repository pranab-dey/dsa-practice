/**
 * Solution #1
 *
 * It Mutates the original string
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {String} str
 */
function reverseStr(str) {
	let i = 0;
	let j = str.length - 1;
	const resultStr = [];

	while (i <= j) {
		[resultStr[i], resultStr[j]] = [str[j], str[i]];
		i++;
		j--;
	}

	return resultStr.join('');
}

/**
 * Solution #2
 */
function reverseStr(str) {
	const reversed = '';

	for (let character of str) {
		reversed = character + reversed;
	}

	return reversed;
}

/**
 * Solution #3
 */
function reverseStr(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = { reverseStr };
