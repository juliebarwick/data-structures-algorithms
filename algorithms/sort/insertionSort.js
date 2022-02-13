// Insertion sort is good for
// have a sorted half (start with the first element)
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1] && j > 0) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};

// This version doesn't use swap, instead saves the value to be inserted
// Time complexity: worst case is O(n^2)
// If data is almost all sorted, then it's a lot better
// Another thing insertionSort is good at is for data that is coming into an already sorted array
const insertionSort1 = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let sorted = i - 1;
    while (currentVal < arr[sorted] && sorted >= 0) {
      // if the currentVal is less than the sorted array value
      // then move the sorted array value up one position in the array
      // this overwrites the value, but we have it saved as currentVal
      arr[sorted + 1] = arr[sorted];
      sorted--;
    }
    // + 1 because we decremented the value one extra at end of while loop
    arr[sorted + 1] = currentVal;
  }

  return arr;
};
