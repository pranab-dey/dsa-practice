function chunk(array, size) {
	const result = [];

	for (let item of array) {
		if (
			!result[result.length - 1] ||
			result[result.length - 1].length === size
		) {
			result.push([item]);
		} else {
			result[result.length - 1].push(item);
		}
	}

	return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
