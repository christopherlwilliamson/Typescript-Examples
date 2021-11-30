// Array 

let fruits: Array<string> = ['🍎', '🍏', '🍇']
let food: string[] = ['🍕', '🍔', '🍟']
let edibles: Array<string> = [...fruits, ...food];

console.log("Got the edibles as: ", edibles);

// Object

let user = {
    firstName: 'Christopher',
    lastName: 'Williamson',
    username: 'ChrisWilliamson'
};

let userDetails = {
    ...user,
    address: '123 NE St.',
    email: 'chris_williamson@cinfin.com'
};

console.log("Got the user as: ", userDetails);

// Functions
function add(x?: number, y?: number, z?: number): number{
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log("Got the sum of all the numbers as: ", add(...numbers))

// Backticks
console.log(`The user with name: ${user.firstName} has an address of: ${userDetails.address} and an email of ${userDetails.email}`);

console.log(`Got the edibles as: `, edibles);

console.log(`Got the userDetails as: `, userDetails);

// Destructure
let { firstName: fName, lastName: lName } = user;
console.log(fName);
console.log(lName);

// Array Destructure
let [apple, greenApple, grapes] = fruits;
console.log(apple);
console.log(greenApple);
console.log(grapes);

let [justApple, ...restEdibles] = edibles;

console.log(justApple);
console.log(restEdibles);

let { firstName, ...restUserDetails } = userDetails;

console.log(firstName);
console.log(restUserDetails);

function getEdibles(apple?, ...restEdibles) {
    console.log(apple);
    console.log(restEdibles);
}

getEdibles(...edibles);