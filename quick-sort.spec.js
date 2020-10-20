const quickSort = require('./quick-sort');
const {
  partitionUsingSubArrays,
  simpleQuickSort,
  advancedQuickSort,
} = quickSort;

it('is able to partition a given array by means of subarrays, using the last value as the pivot', () => {
  const arr = [9, 8, 6, 7, 3, 5, 4, 1, 2];
  expect(partitionUsingSubArrays(arr)).toEqual([1, 2, 9, 8, 6, 7, 3, 5, 4]);
});

it('is able to use a simple quicksort approach', () => {
  const arr = [9, 8, 6, 7, 3, 5, 4, 1, 2];
  expect(simpleQuickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('is able to use a advanced quicksort approach, using the last value as the pivot', () => {
  const arr = [9, 8, 6, 7, 3, 5, 4, 1, 2];
  expect(advancedQuickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it('is able to use a advanced quicksort approach, for larger arrays', () => {
  const arr = [406, 157, 415, 318, 472, 46, 252, 187, 364, 481, 450, 90, 390, 35, 452, 74, 196, 312, 142, 160, 143, 220, 483, 392, 443, 488, 79, 234, 68, 150, 356, 496, 69, 88, 177, 12, 288, 120, 222, 270, 441, 422, 103, 321, 65, 316, 448, 331, 117, 183];
  
  expect(advancedQuickSort(arr)).toEqual([12, 35, 46, 65, 68, 69, 74, 79, 88, 90, 103, 117, 120, 142, 143, 150, 157, 160, 177, 183, 187, 196, 220, 222, 234, 252, 270, 288, 312, 316, 318, 321, 331, 356, 364, 390, 392, 406, 415, 422, 441, 443, 448, 450, 452, 472, 481, 483, 488, 496]);
});