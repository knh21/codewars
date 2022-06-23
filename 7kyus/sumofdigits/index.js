// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
    let sum = null;
    let digits =  Math.floor(integer).toString();
    for(let ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];
    }
    return sum;
}