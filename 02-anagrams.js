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

console.log(firstAnagram("gizmo", "sally"));    // => false
console.log(firstAnagram("elvis", "lives"));  // true

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
