//Modified by Vert, David	9/10/2018

function min(x, y) {
    if (x > y) {
        return y;
    } else if (x < y) {
        return x;
    } else if (x = y) {
        return x || y;
    } else {
        return "nanananana";
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
console.log(min(8, 8));   // Must show 8