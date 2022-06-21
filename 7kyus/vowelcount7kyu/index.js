// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// PREP
// P - function takes in a string, no numbers
// E -
// P - need to keep track of how many vowels are in the string, need an array to hold our vowels


function getCount(str){
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str){
      if(vowels.includes(char)){
        count++
      }
    }
    return count
}


getCount('abc') // >> 1
getCount('abracadabra') // >> 5