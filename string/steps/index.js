// Solution #1

function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (let col = 0; col < n; col++) {
			if (col <= row) stair += '#';
			else stair += ' ';
		}

		console.log(`'${stair}'`);
	}
}

console.log(steps(5));
// '#    '
// '##   '
// '###  '
// '#### '
// '#####'

// Solution #2

function stepsRecursion(n, row = 0, stair = '') {
	if (n === row) return;

	if (stair.length === n) {
		console.log(`'${stair}'`);
		return stepsRecursion(n, row + 1);
	}

	if (stair.length <= row) stair += '#';
	else stair += ' ';

	return stepsRecursion(n, row, stair);
}

console.log(stepsRecursion(5));
