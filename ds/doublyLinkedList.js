class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    // edge case - list is empty
    if (!this.head) return;

    const popped = this.tail;

    // other edge case - only one node in list
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return;

    const oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let trav = null;

    if (index <= this.length / 2) {
      let counter = 0;
      trav = this.head;
      while (counter < index) {
        trav = trav.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      trav = this.tail;
      while (counter > index) {
        trav = trav.prev;
        counter--;
      }
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

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      const nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const removed = this.get(index);
    const prevNode = removed.prev;
    const nextNode = removed.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    removed.next = null;
    removed.prev = null;
    return removed;
  }

  reverse() {
    let trav = this.head;
    while (trav) {
      let curr = trav;
      trav = trav.next;
      let currPrev = curr.prev;
      curr.prev = trav;
      curr.next = currPrev;
    }

    const temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    return this;
  }
}

/*
Compared to singly linked list

Insertion (from either end):
O(1)

Removal (from either end):
O(1)

Access:
O(n)

Searching:
O(n)
although we did optimize by determining what side to search from

Space: Extra pointer does take up more space
***
Good examples:
Browser history
*/
