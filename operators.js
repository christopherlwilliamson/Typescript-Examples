// Array 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ['🍎', '🍏', '🍇'];
var food = ['🍕', '🍔', '🍟'];
var edibles = __spreadArray(__spreadArray([], fruits, true), food, true);
console.log("Got the edibles as: ", edibles);
// Object
var user = {
    firstName: 'Christopher',
    lastName: 'Williamson',
    username: 'ChrisWilliamson'
};
var userDetails = __assign(__assign({}, user), { address: '123 NE St.', email: 'chris_williamson@cinfin.com' });
console.log("Got the user as: ", userDetails);
// Functions
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Got the sum of all the numbers as: ", add.apply(void 0, numbers));
// Backticks
console.log("The user with name: ".concat(user.firstName, " has an address of: ").concat(userDetails.address, " and an email of ").concat(userDetails.email));
console.log("Got the edibles as: ", edibles);
console.log("Got the userDetails as: ", userDetails);
// Destructure
var fName = user.firstName, lName = user.lastName;
console.log(fName);
console.log(lName);
// Array Destructure
var apple = fruits[0], greenApple = fruits[1], grapes = fruits[2];
console.log(apple);
console.log(greenApple);
console.log(grapes);
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
var firstName = userDetails.firstName, restUserDetails = __rest(userDetails, ["firstName"]);
console.log(firstName);
console.log(restUserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);
