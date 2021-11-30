function greetUser(name: string) {
    console.log(`Hello there, ${name}!`);
}

const greetUserByName = function(name: string) {
    console.log(`Hello there, ${name}!`);
};

greetUser(`John`);
greetUserByName(`Jane`);

// Arrow Functions

const greetUserByNameArrow = (name: string) => console.log(`Hello there, ${name}!`);

greetUserByNameArrow(`Jacob`);

const edibles = [
    {
        edible: `🍕`,
        isVegan: false,
    },
    {
        edible: `🍔`,
        isVegan: false,
    },
    {
        edible: `🍟`,
        isVegan: true,
    },
    {
        edible: `🍦`,
        isVegan: true,
    },
    {
        edible: `🌮`,
        isVegan: true,
    },
];

// Anonymous function syntax
console.log(
    edibles.filter(function(item){
    return item.isVegan;
    })
);

console.log(edibles.filter(item => item.isVegan));

const user = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Hey there, ${that.firstName}`)
        }, 1000);
    }
};

// Example with arrow functions
const userArrow = {
    firstName: `Jane`,
    lastName: `Doe`,
    lazyGreet: function() {
        setTimeout(() => console.log(`Hey there, ${this.firstName}`), 1000);
    }
};

user.lazyGreet(); 

userArrow.lazyGreet();