class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parentIndex]) {
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = val;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
    if (!this.values.length) return;

    const max = this.values[0];
    const popped = this.values.pop();
    const n = this.values.length;
    if (!n) return popped;

    this.values[0] = popped;
    let index = 0;
    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;

    while (leftChild < n) {
      let swaps = false;
      const currValue = this.values[index];
      const leftValue = this.values[leftChild];
      const rightValue = this.values[rightChild];
      if (currValue < rightValue || currValue < leftValue) {
        if (leftValue >= rightValue || rightValue === undefined) {
          this.values[index] = leftValue;
          this.values[leftChild] = popped;
          index = leftChild;
          swaps = true;
        } else if (leftValue < rightValue) {
          this.values[index] = rightValue;
          this.values[rightChild] = popped;
          index = rightChild;
          swaps = true;
        }
      }

      if (!swaps) break;

      leftChild = index * 2 + 1;
      rightChild = index * 2 + 2;
    }

    return max;
  }
}

const h = new MaxBinaryHeap();
let a = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

for (const num of a) {
  h.insert(num);
}

while (h.values.length) {
  console.log(h.extractMax());
}

/*
Insertion, removal: O(log n)
Search O(n) - you can't guarantee the search will be O(log n) like in bst

The rules:
- The parent is always greater (if max, lesser if min) than its children
- We fill up each level (left first) before moving to the next level

Good for creating priority queues
Can be a min or maxHeap
We can use an array for the heap
*/
