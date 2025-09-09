/* Solution 1 */
function isPalindrome(str) {
	let i = 0;

	while (i <= Math.ceil(str.length / 2)) {
		if (str[i] !== str[str.length - i - 1]) return false;
		i++;
	}

	return true;
}

console.log(isPalindrome('abccba'));
console.log(isPalindrome('abccb'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('ma'));
console.log(isPalindrome('mm'));

/* Solution 2 */
function isPalindrome(str) {
	return str.split('').every((ch, i) => ch === str[str.length - i - 1]);
}
