function quadraticBiggestFish(fishes) {
let longest = 0;
let index = 0;
  for (let i = 0; i < fishes.length; i++){
    let fish = fishes[i]
    let counter= 0;
    for (let j = 0; j < fish.length; j++){
      counter++
    }
    if (counter > longest){
      longest = counter;
      index = i;
    }
  }
  return fishes[index]
}
const arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

// console.log(quadraticBiggestFish(arr))

function nlognBiggestFish(fishes) {
  fishes.sort(function(fish1, fish2){
    return fish2.length - fish1.length
  })
  console.log(fishes)
  return fishes[0];
}
// console.log(nlognBiggestFish(arr))

function linearBiggestFish(fishes) {
  let longest = fishes[0];
  for (let i = 1; i < fishes.length; i++){
    if (fishes[i].length > longest.length){
      longest = fishes[i]
    }
  }
  return longest;
}
// console.log(linearBiggestFish(arr));

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
let idx;
  for(let i =0; i < tilesArray.length; i++){
    if(direction === tilesArray[i]){
      idx = i;
    }
  }
  return idx;
}

console.log(slowDance("left-down",tilesArray))

tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
return tilesObj[direction]
}

console.log(fastDance("left", tilesObj))