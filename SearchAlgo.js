let arr = [1, 3, 5, 8, 12, 14, 17, 21, 25, 27, 31, 35, 37, 42, 45, 49, 50];

//linear search
function linearSearch(arr, ele) {
  if (!ele || !arr.length) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

console.log("linearSearch: ", linearSearch(arr, 35));

//Binary search
function binarySearch(arr, ele, start, end) {
  let left = start;
  let right = end;
  let pivot = Math.floor((left + right) / 2);
  if(left > right) return -1;
  if (ele === arr[pivot]) {
    return pivot;
  } else if (ele > arr[pivot]) {
    return binarySearch(arr, ele, pivot + 1, right);
  } else {
    return binarySearch(arr, ele, left, pivot - 1);
  }
}

console.log("binarySearch: ", binarySearch(arr, 31, 0, arr.length - 1));
