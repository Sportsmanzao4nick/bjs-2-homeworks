function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = arr1.every((value, idx) => value === arr2[idx]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter((positive) => positive > 0).filter((freq) => freq % 3 === 0).map((multi) => multi * 10); 
  return resultArr; // array
}
