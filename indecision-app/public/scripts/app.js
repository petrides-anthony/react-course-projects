'use strict';

// const square = function (x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

//challenge


var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Tony Petrides'));

var getFirstNameArrow = function getFirstNameArrow(fullName) {
    return fullName.split(' ')[1];
};

console.log(getFirstNameArrow('Tony Petrides'));
