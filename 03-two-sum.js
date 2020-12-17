function badTwoSum(arr, targetSum) {
// Time complexity - n^2 | Space - 1
for (let i = 0; i < arr.length; i++){
  for (let j = 1; j < arr.length; j++){
    if (arr[i] + arr[j] === targetSum) return true;
  }
}
return false;
}

const arr = [0, 1, 5, 7];
console.log(badTwoSum(arr, 9))

function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
