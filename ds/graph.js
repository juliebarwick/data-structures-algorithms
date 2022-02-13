class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((x) => x !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecurisve(startVertex) {
    const results = [];
    const visited = {};

    function _dfs(visited, adjList, node) {
      results.push(node);
      visited[node] = true;
      for (const vertex of adjList[node]) {
        if (!visited[vertex]) {
          _dfs(visited, adjList, vertex);
        }
      }
    }

    _dfs(visited, this.adjacencyList, startVertex);
    return results;
  }

  depthFirstIterative(startVertex) {
    const results = [];
    const stack = [startVertex];
    const visited = { [startVertex]: true };
    while (stack.length) {
      const node = stack.pop();
      results.push(node);
      for (const vertex of this.adjacencyList[node]) {
        if (!visited[vertex]) {
          visited[vertex] = true;
          stack.push(vertex);
        }
      }
    }
    return results;
  }

  breadthFirst(startVertex) {
    const results = [];
    const queue = [startVertex];
    const visited = {};
    visited[startVertex] = true;

    while (queue.length) {
      const node = queue.shift();
      results.push(node);
      for (const vertex of this.adjacencyList[node]) {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }
    return results;
  }
}

const g = new UndirectedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.breadthFirst("A"));
