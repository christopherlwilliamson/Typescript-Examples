var pet = "\uD83D\uDC36";
function setPet() {
    var pet = "\uD83D\uDC31";
    console.log("Pet in the house: ".concat(pet));
}
setPet();
console.log("Pet outside the house: ".concat(pet));
var index = 0;
for (var index = 0; index < 5; index++) {
    console.log("Index inside the for loop: ".concat(index));
}
console.log("Index outside the for loop: ".concat(index));
