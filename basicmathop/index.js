// ur task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


// PREP
// P- take in a string and two numbers, can be - and +, will be whole numbers
// R - return a whole number either - or +
// E -

function basicOp(operation, value1, value2){
    
  if(operation === '+'){
    return value1+value2
  }else if(operation === '-'){
    return value1-value2
  }else if(operation === '*'){
    return value1*value2
  }else if(operation === '/'){
    return value1/value2
  }
  // checking to see which operation is being passed, do the math
  // maybe check to see what operation it is and then do the correlationg math
}

basicOp('-', 5,2) // expected outcome to be 3
basicOp('+', 10,3) // expected outcome to be 13
basicOp('*', 5,5) // expected outcome to be 25