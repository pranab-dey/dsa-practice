function pyramid(n, row = 0, level = '') {
	if (n === row) return;

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midPointIdx = Math.floor((2 * n - 1) / 2);

	if (midPointIdx - row <= level.length && midPointIdx + row >= level.length)
		level += '#';
	else level += ' ';

	return pyramid(n, row, level);
}

console.log(pyramid(3));
