function greetUser(name) {
    console.log("Hello there, ".concat(name, "!"));
}
var greetUserByName = function (name) {
    console.log("Hello there, ".concat(name, "!"));
};
greetUser("John");
greetUserByName("Jane");
// Arrow Functions
var greetUserByNameArrow = function (name) { return console.log("Hello there, ".concat(name, "!")); };
greetUserByNameArrow("Jacob");
var edibles = [
    {
        edible: "\uD83C\uDF55",
        isVegan: false
    },
    {
        edible: "\uD83C\uDF54",
        isVegan: false
    },
    {
        edible: "\uD83C\uDF5F",
        isVegan: true
    },
    {
        edible: "\uD83C\uDF66",
        isVegan: true
    },
    {
        edible: "\uD83C\uDF2E",
        isVegan: true
    },
];
// Anonymous function syntax
console.log(edibles.filter(function (item) {
    return item.isVegan;
}));
console.log(edibles.filter(function (item) { return item.isVegan; }));
var user = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("Hey there, ".concat(that.firstName));
        }, 1000);
    }
};
// Example with arrow functions
var userArrow = {
    firstName: "Jane",
    lastName: "Doe",
    lazyGreet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Hey there, ".concat(_this.firstName)); }, 1000);
    }
};
user.lazyGreet();
userArrow.lazyGreet();
