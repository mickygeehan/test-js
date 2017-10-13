"use strict";

//Qusetion 1
var array = [1,2,3,4,5,6,7,8,9];
var numberRotate = 3;
var newArray = this.rotateArray(array,numberRotate);
console.log(newArray);

function rotateArray(array, numberRotate) {
    while(numberRotate--) {
        //remove first element using shift and push to end
        var firstElement = array.shift();
        array.push(firstElement);
    }
    return array;
}


//Question 2
pythag();
function pythag() {
    var sum = 1000,
        a, b, c;

    for(a = 1; a <= 500; a++) {
        for(b = a++; b <= 500; b++) {
            c = sum - a - b;
            if(a*a + b*b === c*c) {
                console.log('a - ',a,' b - ',b,' c - ',c);
            }
        }
    }
}


//Question 3
console.log(this.recursive(5));
function recursive(number) {
    if(number <= 0) {
        return 1;
    } else {
        return number * recursive(number - 2);
    }
    
}