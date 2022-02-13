class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstras(start, end) {
    // set up the distances object, with all values at infinity, except start
    const distances = {};
    // create a previous obj to store the shortest path
    const previous = {};
    for (const node in this.adjacencyList) {
      if (node === start) {
        distances[node] = 0;
      } else {
        distances[node] = Infinity;
      }
      previous[node] = null;
    }

    // create priority queue and add start node
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);

    // keep track of nodes visited
    const seen = new Set();
    // keep removing nodes in order or priority
    while (pq.values.length) {
      // dequeue shortest path so far
      const shortest = pq.dequeue().val;

      // add parent to seen
      seen.add(shortest);

      if (shortest === end) {
        let res = [];
        let trav = shortest;
        while (trav !== start) {
          res.push(trav);
          trav = previous[trav];
        }
        res.push(trav);
        return res.reverse();
      }

      for (let i = 0; i < this.adjacencyList[shortest].length; i++) {
        const nextNode = this.adjacencyList[shortest][i];
        const nextNodeName = nextNode.node;
        if (!seen.has(nextNodeName)) {
          let totalDistance = distances[shortest] + nextNode.weight;
          if (totalDistance < distances[nextNodeName]) {
            previous[nextNodeName] = shortest;
            distances[nextNodeName] = totalDistance;
            pq.enqueue(nextNodeName, totalDistance);
          }
        }
      }
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
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
    const max = this.values[0];
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

    return max;
  }
}

// Test one, expect: A-B-E
const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 3);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 1);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("F", "E", 1);
wg.addEdge("D", "F", 1);

console.log(wg.dijkstras("A", "E"));

// Test 2: expect A-C-D-F-E
var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstras("A", "E"));
