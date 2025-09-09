function fizzbuzz(n) {
	let i = 1;

	while (i <= n) {
		switch (true) {
			case i % 3 === 0 && i % 5 === 0:
				console.log('fizzbuzz');
				break;
			case i % 3 === 0:
				console.log('fizz');
				break;
			case i % 5 === 0:
				console.log('buzz');
				break;
			default:
				console.log(i);
		}
		i++;
	}
}

console.log(fizzbuzz(15));
