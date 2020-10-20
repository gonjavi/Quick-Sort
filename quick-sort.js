function partitionComponents(array) {
  const lower = [], higher = [];
  const pivot = array[array.length - 1];
  
  for(let i = 0; i < array.length -1; i++){
    if (array[i] <= pivot) lower.push(array[i]);
    else higher.push(array[i]);
  }

  return {lower, pivot, higher};
}

function partitionUsingSubArrays(array) {
  const {lower, pivot, higher} = partitionComponents(array);
  return lower.concat(pivot, higher);
}


function simpleQuickSort(array) {
  if (array.length <= 1) return array;

  const {lower, pivot, higher} = partitionComponents(array);

  return simpleQuickSort(lower).concat(pivot, simpleQuickSort(higher));
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let [i, j] = [low, low];
  while (i < high) {
    if (arr[i] < pivot) {
      swap(arr, i, j);
      j += 1;
    }
    i += 1;
  }
  swap(arr, j, high);
  return j;
};
const advancedQuickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivot = partition(arr, low, high);
    advancedQuickSort(arr, low, pivot - 1);
    advancedQuickSort(arr, pivot + 1, high);
    return arr;
  }
}


module.exports = {
  partitionUsingSubArrays,
  simpleQuickSort,
  advancedQuickSort,
};