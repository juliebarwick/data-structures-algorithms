// Optimized version for sorted/nearly sorted array, also accounts
// for the fact that the highest values are bubbled to the end
// and don't need to be compared once 'bubbled' to the end
// Time complexity: O(n^2), O(n) if nearly sorted
// Space: O(1), array sorted in place
// Bubble sort is not the worst if data is nearly sorted

const bubbleSort = function (arr) {
  let swaps = true;
  let end = 1;
  while (swaps) {
    swaps = false;
    for (var i = 0; i < arr.length - end; i++) {
      let curr = arr[i];
      let next = arr[i + 1];
      // console.log(arr, 'comparing', curr, next);
      if (curr > next) {
        const temp = curr;
        arr[i] = next;
        arr[i + 1] = temp;
        swaps = true;
      }
    }
    end++;
  }
  return arr;
};
