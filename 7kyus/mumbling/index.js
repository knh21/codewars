// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// PREP
// P- only takes in a string, letter a-z is case sensitive
// R- returns a string
// E- accum("abcd") -> "A-Bb-Ccc-Dddd"
// P- whatever postion the letter is in, is how many times it repeats

function accum(s) {
	const result = []
    const lowerStr = s.toLowerCase()
    for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    result.push(str)
  }
}

accum("abcd") //-> "A-Bb-Ccc-Dddd"

