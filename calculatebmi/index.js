// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    let totalBmi = weight / Math.pow(height,2)
    if(totalBmi <= 18.5){
      return "Underweight"
    }else if(totalBmi <= 25.0){
      return "Normal"
    }else if(totalBmi <= 30){
      return "Overweight"
    }else if(totalBmi > 30){
      return "Obese"
    }
}