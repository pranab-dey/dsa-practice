class Queue {
	constructor() {
		this.queue = [];
	}

	add(item) {
		this.queue.unshift(item);
	}

	remove() {
		this.queue.pop();
	}
}

const myQueue = new Queue();
myQueue.add(1);
myQueue.add(2);

console.log(myQueue);

myQueue.remove();
console.log(myQueue);
