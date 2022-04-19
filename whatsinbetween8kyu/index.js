//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
// take in two nums as parameters
//  return an array of nums

function between(a, b){
    arr= []
    for(i = a, i <= b; i++;){
        arr.push(i)
    }
    return arr
}