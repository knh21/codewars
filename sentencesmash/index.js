// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// P- takes in an array of words (words)
// R- returns the given array together in a sentence (concat?? join??)
// E - 


function smash(words){
    
    let newWords = words.join(' ')
    return newWords   
}



console.log(smash("hello world this is great"))