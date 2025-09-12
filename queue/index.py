"""Simulate a queue nature"""


class Queue:
    def __init__(self):
        self._queue = []

    def enqueue(self, item):
        """ Add item to the _queue (Left)"""
        self._queue.append(item)
        return item

    def dequeue(self):
        """Removes item from the _queue (Right)"""
        if self._queue:
            return self._queue.pop(0)
        return None

    def is_empty(self):
        """Checks if the _queue is empty or not"""
        return len(self._queue) == 0

    def length(self):
        """Get the length of the _queue"""
        return len(self._queue)

    def __str__(self):
        return f"Queue({self._queue})"


if __name__ == "__main__":
    queue = Queue()
    print(f"Enqueue 1: {queue.enqueue(1)}")
    print(f"Enqueue 3: {queue.enqueue(3)}")
    print(f"Enqueue 2: {queue.enqueue(2)}")
    print(f"Queue length: {queue.length()}")
    print(f"Is empty: {queue.is_empty()}")
    print(f"Queue: {queue}")

    print(f"Dequeue: {queue.dequeue()}")
    print(f"Dequeue: {queue.dequeue()}")
    print(f"Queue length: {queue.length()}")
    print(f"Is empty: {queue.is_empty()}")
    print(f"Queue: {queue}")

    print(f"Dequeue: {queue.dequeue()}")
    print(f"Is empty: {queue.is_empty()}")
