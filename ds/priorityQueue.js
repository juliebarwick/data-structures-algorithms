class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      index > 0 &&
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = newNode;
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  dequeue() {
    const min = this.values[0];
    const element = this.values.pop();
    const n = this.values.length;
    if (n === 0) {
      return element;
    }
    this.values[0] = element;
    let index = 0;
    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;

    while (leftChild < n) {
      let leftNode = this.values[leftChild];
      let rightNode = this.values[rightChild];
      let hasSwaps = false;
      if (
        leftNode.priority < element.priority ||
        (rightNode && rightNode.priority < element.priority)
      ) {
        if (!rightNode || leftNode.priority < rightNode.priority) {
          this.values[index] = leftNode;
          this.values[leftChild] = element;
          hasSwaps = true;
          index = leftChild;
        } else {
          this.values[index] = rightNode;
          this.values[rightChild] = element;
          hasSwaps = true;
          index = rightChild;
        }
      }

      if (!hasSwaps) break;

      leftChild = index * 2 + 1;
      rightChild = index * 2 + 2;
    }

    return min;
  }
}

const p = new MinPriorityQueue();
let a = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

for (const num of a) {
  p.enqueue(num * 2, num);
}

while (p.values.length) {
  console.log(p.dequeue().priority);
}
