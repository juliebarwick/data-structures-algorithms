// Radix sort helpers
const getDigit = function (num, place) {
  let reduced = Math.abs(num);
  let finalDigit = 0;
  for (i = 0; i <= place; i++) {
    finalDigit = reduced % 10;
    reduced = (reduced - finalDigit) / 10;
  }
  return finalDigit;
};

// another version
const getDigitByPlace = function (num, place) {
  return Math.floor(num / 10 ** place) % 10;
};

const numOfDigits = function (num) {
  let place = 0;
  let reduced = Math.abs(num);
  while (reduced > 0) {
    place++;
    reduced = Math.floor(reduced / 10);
  }
  return place;
};

const mostDigits = function (nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(numOfDigits(nums[i]), maxDigits);
  }
  return maxDigits;
};

// A non-comparison sorting algorithm that only works on numbers
// Info about the size of the number is encoded in the digits
// Time (worst/best): O(nk), n is length of array, k is length of numbers
const radixSort = function (nums) {
  const maxDigits = mostDigits(nums);
  let results = nums;

  for (let n = 0; n < maxDigits; n++) {
    // make the buckets
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const index = getDigitByPlace(nums[i], n);
      buckets[index].push(nums[i]);
    }
    // join buckets back together
    nums = [].concat(...buckets);
  }
  return nums;
};
