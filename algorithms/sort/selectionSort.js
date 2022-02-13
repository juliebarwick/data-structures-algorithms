// Selection Sort
// Time complexity: O(n^2)
// Space complexity: O(1)
// When memory is a concern, selection sort can be better for sorted array
// since you are only swapping once with each pass
const selectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};
