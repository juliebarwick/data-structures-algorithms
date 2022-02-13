// General traversals of binary trees
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preorderTraversal = function (root) {
  var res = [];
  if (!root) {
    return res;
  }

  res.push(root.val);

  if (root.left) {
    res = res.concat(preorderTraversal(root.left));
  }
  if (root.right) {
    res = res.concat(preorderTraversal(root.right));
  }

  return res;
};

const preorderTraversalHelper = function (root) {
  var results = [];

  var trav = function (node) {
    if (!node) {
      return;
    }

    results.push(node.val);
    if (node.left) {
      trav(node.left);
    }
    if (node.right) {
      trav(node.right);
    }
  };

  trav(root);
  return results;
};

const inorderTraversal = function (root) {
  let res = [];

  if (!root) {
    return res;
  }
  if (root.left) {
    res = res.concat(inorderTraversal(root.left));
  }
  res.push(root.val);
  if (root.right) {
    res = res.concat(inorderTraversal(root.right));
  }

  return res;
};

const preorderTraversalIter = function (root) {
  const res = [];
  const stack = [root];

  while (stack.length) {
    let t = stack.pop();
    if (t) {
      if (t.right) stack.push(t.right);
      if (t.left) stack.push(t.left);
      res.push(t.val);
    }
  }

  return res;
};

const inorderTraversalIter = function (root) {
  const res = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    const p = stack.pop();
    res.push(p.val);
    curr = p.right;
  }

  return res;
};

const postorderTraversal = function (root) {
  // Left, Right, Root
  var results = [];
  var traverse = function (node) {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    results.push(node.val);
  };

  traverse(root);
  return results;
};

const postorderTraversalIter = function (root) {
  const results = [];
  const s2 = [];
  let s1 = [root];

  while (s1.length) {
    const popped = s1.pop();
    s2.push(popped);

    if (popped.left) s1.push(popped.left);
    if (popped.right) s1.push(popped.right);
  }
  while (s2.length) {
    results.push(s2.pop().val);
  }

  return results;
};
