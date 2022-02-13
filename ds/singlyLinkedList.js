class Node {
  constructor(val) {
    this.val = val === undefined ? null : val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    let trav = this.head;
    let prev = this.head;
    while (trav.next) {
      prev = trav;
      trav = trav.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // edge case: only one item is left
    if (this.head === trav) {
      this.head = null;
      this.tail = null;
    }

    return trav;
  }

  shift() {
    if (!this.head) {
      this.tail === null;
      return;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    // edge case: only one item is left
    if (this.head === this.tail) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let trav = this.head;
    while (counter < index) {
      trav = trav.next;
      counter++;
    }
    return trav;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      const prevNode = this.get(index - 1);
      const removed = prevNode.next;
      prevNode.next = prevNode.next.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    let prev = null;
    let next = this.head;
    let curr = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // swap head and tail nodes
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }

  reverse1() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }
}

/*
insertion: O(1)
removal, depends on location O(1) from beginning otherwise O(n)
searching: O(n)
access: O(n)
*/
