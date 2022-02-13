class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // add to the end
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return this.size;
  }

  dequeue() {
    // remove from the front
    if (!this.first) return;

    const dequeued = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return dequeued.val;
  }
}

/*
Insertion/removal: O(1)
Search/access: O(n)
*/
