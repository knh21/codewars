// ake a function that receive age, and return what they drink.

// Rules:


// Children under 14 old. // Kids drink toddy.
// Teens under 18 old. // Teens drink coke.
// Young under 21 old. // Young adults drink beer.
// Adults have 21 or more. // Adults drink whisky.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(age) {
    if(age <= 13){
    return 'drink toddy'
    }else if(age <= 17){
        return 'drink coke'
    }else if(age < 21){
        return 'drink beer'
    }else if(age >= 20){
      return 'drink whisky'
    }  
};