"use strict";
function add1(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input')
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult1 = true;
const resultPhrase = 'Result is: ';
add1(number1, number2, printResult1, resultPhrase);
