const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = [...kittens]
  newArray.pop();
  return newArray;
}

function removeFirstKitten(){
  var newArray = [...kittens]
  newArray.shift();
  return newArray;
}

const arr = [1, 2, 3];

const mapExample = () => arr.map(e => e);

console.log(mapExample());
