// arguments object - no longer bound with arrow functions

const add =  (a, b)  => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 10001))

// this keyword - non longer bound either

const user = {
    name: 'Tony',
    cities: ['London', 'Tokyo', 'Odama'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - retrun a new array where the numbers have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]