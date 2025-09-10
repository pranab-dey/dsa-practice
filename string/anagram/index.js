/* Solution #1 */
function isAnagram(strA, strB) {
	const str_a = strA.replace(/[^\w]/g, '').toLowerCase();
	const str_b = strB.replace(/[^\w]/g, '').toLowerCase();

	const str_a_Map = getCharCountMap(str_a);
	const str_b_Map = getCharCountMap(str_b);

	if (Object.keys(str_a_Map).length !== Object.keys(str_b_Map).length)
		return false;

	for (let ch in str_a_Map) {
		if (str_a_Map[ch] !== str_b_Map[ch]) return false;
	}

	return true;
}

function getCharCountMap(str) {
	const map = {};

	for (ch of str) {
		map[ch] = map[ch] + 1 || 1;
	}

	return map;
}

console.log(isAnagram('rail Safety!', 'fairy Tales')); // true
console.log(isAnagram('Hi There!', 'Bye There')); // false

/* Solution #2 */
function isAnagram(strA, strB) {
	return getCleanString(strA) === getCleanString(strB);
}

function getCleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(isAnagram('rail Safety!', 'fairy Tales')); // true
console.log(isAnagram('Hi There!', 'Bye There')); // false
