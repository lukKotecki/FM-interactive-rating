"use strict";
var _a;
console.log('hel lo');
let radioInput = document.getElementsByClassName('radio-input');
console.log(radioInput);
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("submit button clicked");
});
const elements = Array.from(document.getElementsByClassName("radio-input"));
elements.forEach((el) => {
    el.addEventListener("click", function (e) {
        let num = e.target.value;
        console.log(num);
    });
});
// radioInput.forEach(radio=> {
//   radio.addEventListener("click", function(e) {
//     console.log(e.target.value)
//   })
// })
let chosenRating = 0;
// radioInput[0].addEventListener("click", function(e) {
//     const element = e.currentTarget as HTMLInputElement;
//     console.log(chosenRating);    
//     chosenRating = Number(element.value);
//     console.log(chosenRating);    
// })
//# sourceMappingURL=index.js.map