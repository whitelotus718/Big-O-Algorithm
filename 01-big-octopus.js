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

console.log(quadraticBiggestFish(arr))

function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


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
  // Code goes here ...
}
