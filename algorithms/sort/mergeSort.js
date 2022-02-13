const mergeArrays = function (arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const results = [];
  while (p1 < arr1.length || p2 < arr2.length) {
    if (arr1[p1] < arr2[p2] || p2 >= arr2.length) {
      results.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] >= arr2[p2] || p1 >= arr1.length) {
      results.push(arr2[p2]);
      p2++;
    }
  }
  return results;
};

// Best/worst is O(n log n), space is O(n)
// Time is O(n log n) because there is O(log n) decompositions, but O(n) comparsions (for each subarray)
const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));

  return mergeArrays(arr1, arr2);
};
