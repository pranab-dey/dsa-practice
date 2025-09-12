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

	peek() {
		return this.queue[this.queue.length - 1];
	}
}

const myQueue = new Queue();
myQueue.add(1);
myQueue.add(2);

console.log('peek:', myQueue.peek());
console.log(myQueue);

myQueue.remove();
console.log(myQueue);
