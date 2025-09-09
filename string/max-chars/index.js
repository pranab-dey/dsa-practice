function maxChars(str) {
	const charMap = {};
	let maxChar = '';
	let maxCharCount = 0;

	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;

		if (charMap[char] > maxCharCount) {
			maxChar = char;
			maxCharCount = charMap[char];
		}
	}

	return { charater: maxChar, count: maxCharCount };
}

// console.log(maxChars('aaaabbbbbbcbshccc'));
// { charater: 'b', count: 7 }
