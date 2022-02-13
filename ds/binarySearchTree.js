class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  construcotr() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val === current.val) return;
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    return false;
  }

  contains(val) {
    let node = this.find(val);
    if (!node) return false;
    return true;
  }

  bfs() {
    if (!this.root) return;
    let results = [];
    const queue = [this.root];
    while (queue.length) {
      const dequeued = queue.shift();
      results.push(dequeued.val);
      if (dequeued.left) {
        queue.push(dequeued.left);
      }
      if (dequeued.right) {
        queue.push(dequeued.right);
      }
    }
    return results;
  }

  dfsPreOrder() {
    if (!this.root) return;
    let result = [];
    let _dfs = (node) => {
      result.push(node.val);
      if (node.left) {
        _dfs(node.left);
      }
      if (node.right) {
        _dfs(node.right);
      }
    };
    _dfs(this.root);
    return result;
  }

  dfsPostOrder() {
    if (!this.root) return;
    let result = [];
    let _dfs = (node) => {
      if (node.left) {
        _dfs(node.left);
      }
      if (node.right) {
        _dfs(node.right);
      }
      result.push(node.val);
    };
    _dfs(this.root);
    return result;
  }

  dfsInOrder() {
    if (!this.root) return;
    let result = [];
    let _dfs = (node) => {
      if (node.left) {
        _dfs(node.left);
      }
      result.push(node.val);
      if (node.right) {
        _dfs(node.right);
      }
    };
    _dfs(this.root);
    return result;
  }
}

/*
Insertion/searching: O(log n)
ps, log is base 2
BUT not guaranteed if the tree is not balanced, worst case could be O(n)
*/
