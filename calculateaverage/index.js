// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0;
    if (array.length == 0) { // check if array is empty
        sum = 0;
        return sum;
    } else {
        for (var i = 0; i < array.length; i++){ // Go through and calc total of array
            sum = sum + array[i];
        }
        return sum / array.length; // divide total by length to find average
    }
} 