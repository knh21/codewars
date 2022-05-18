// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// use split to split the string into an array of characters
// use reverse to reverse the array of characters
// use join to join the elements of an array to a string


function solution(str){
    return str.split('').reverse().join('')
}