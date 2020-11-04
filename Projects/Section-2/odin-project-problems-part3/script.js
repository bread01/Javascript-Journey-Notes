// Write a function called add7 that takes one 
//number and returns that number + 7.
function add7(a, b) {
    console.log(a + 7);
}
add7(3);

// Write a function called multiply that takes 
//2 numbers and returns their product.

function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 5);

// Write a function called capitalize that takes a 
//string and returns that string with only the first 
//letter capitalized. Make sure that it can take 
//strings that are lowercase, UPPERCASE or BoTh.

function capitalize(fixMe) {
    return fixMe.charAt(0).toUpperCase() + fixMe.slice(1);
}
console.log(capitalize("yo homey"));

// Write a function called lastLetter that takes a 
//string and returns the very last letter of that 
//string:
// lastLetter("abcd") should return "d"

function lastLetter(fixEnd) {
    return fixEnd.charAt(-1) + fixEnd.slice(-1);
}
console.log(lastLetter("yo mofo"));