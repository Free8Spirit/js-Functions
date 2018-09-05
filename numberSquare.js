//Modified by Vert, David   9/7/2018

// Square the given number x
function square1(x) {
    return (x * x);
}

// Square the given number x
const square2 = x => `${x * x}` // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

for (var x = 0; x <=10; x++) {
    console.log(square1(x));
}