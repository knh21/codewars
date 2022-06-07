// Write a function that returns a string in which firstname is swapped with last name.


// Example(Input --> Output)

// "john McClane" --> "McClane john"


// PREP
// P-string
// R- return a string
// E-

function nameShuffler(str){
    // swap the first word with the second
    // may have to reverse the order of the string
    let newStr = str.split(' ').reverse().join(' ')
    return newStr

}


nameShuffler('Hello World')  // 'World Hello'