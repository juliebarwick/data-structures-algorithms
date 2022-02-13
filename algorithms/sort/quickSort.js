const quickSort = function (arr) {
  function quickSortHelperSame(start, end) {
    let pivot = quickSortHelper(arr, start, end);
    if (pivot - start > 1) {
      quickSortHelperSame(start, pivot - 1);
    }
    if (end - pivot > 1) {
      quickSortHelperSame(pivot + 1, end);
    }
  }

  quickSortHelperSame(0, arr.length - 1);

  return arr;
};

const quickSortHelper = function (array, start, end) {
  let pvtIndex = start;
  let sorted = pvtIndex + 1;
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pvtIndex]) {
      let temp = array[i];
      array[i] = array[sorted];
      array[sorted] = temp;
      sorted++;
    }
  }

  let temp = array[sorted - 1];
  array[sorted - 1] = array[pvtIndex];
  array[pvtIndex] = temp;

  return sorted - 1;
};

// This version uses a middle value as the pivot, and swaps on either side
// This is a recursive
// Tricks: remember to store the values of end/start/pivot in variables
// Middle value is better than the first in the case that the array is sorted
// Time is O(n log n), worst is O(n^2), space is O(n log n)
const quicksortHelper = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  let pivot = arr[Math.floor((start + end) / 2)];
  let left = start;
  let right = end;
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  quicksortHelper(arr, start, right);
  quicksortHelper(arr, left, end);
};

const quicksort = function (array) {
  const n = array.length - 1;
  if (n < 2) return array;

  quicksortHelper(array, 0, n);
  return array;
};
