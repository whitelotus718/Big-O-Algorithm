function firstAnagram(str1, str2) { /// O(n)
  let letters = str1.split('');
  for (let i = 0; i < str2.length; i++){
     const letter = str2[i];
     const index = letters.indexOf(letter)
     if (index > -1){
      letters.splice(index,1)
     }
  }
  if (letters.length === 0){
    return true
  }else return false
}

// n complexity

// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"));  // true

const secondAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("")

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"));  // true


function thirdAnagram(str1, str2) {
let obj = {}
let obj2 = {}

for (let i = 0; i < str1.length || i < str2.length; i++){
  const str1Key = str1[i], str2Key = str2[i];
  if(obj[str1Key]){
    obj[str1Key]++
  }else {
    obj[str1Key] = 1
  }
  if(obj2[str2Key]){
    obj2[str2Key]++
  }else {
    obj2[str2Key] = 1
  }
}
const val1Array = Object.entries(obj);
const val2Array = Object.entries(obj2);

if (val1Array.sort().join('') === val2Array.sort().join('')){
  return true
}else return false
// console.log(val1Array)
// console.log(val2Array)
}

console.log(thirdAnagram("gizmo", "spark"));    // => false
console.log(thirdAnagram("elvis", "lives"));

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
