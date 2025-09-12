function fib(n) {
	let first = 0;
	let second = 1;
	let sum = 0;

	if (n == 1) return first;
	if (n === 2) return second;

	for (let i = 3; i <= n; i++) {
		sum = first + second;
		first = second;
		second = sum;
	}

	return sum;
}

function fib(n) {
	if (n < 2) return n;

	return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
	const cache = {};
	return function (...args) {
		if (cache[args]) return cache[args];

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	};
}

const fib = memoize(fib);

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
