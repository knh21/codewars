// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let newStr = "";

    for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) <= 4) {
        newStr += "0";
    } else if (Number(x[i]) >= 5) {
        newStr += "1";
    }
  } 
    return newStr; 
}