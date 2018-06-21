var nameVar = 'Tony';
var nameVar = 'Petrides';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('namelet', nameLet);

const nameConst = 'Frank';
console.log ('nameConst', nameConst);

// Block Scoping

const fullName = 'Jen Petrides';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);