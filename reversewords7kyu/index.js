// PREP
// P- string parameter
// R: returns a string
// E: "apple" >>> "elppa"
// P: may have to turn the string into an array before reversing it

function reverseWords(str){
    return str.split(" ").map(i=>i.split("").reverse().join("")).join(" ");
}

