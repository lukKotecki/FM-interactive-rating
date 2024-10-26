"use strict";
var _a;
console.log('hel lo');
let radioInput = document.getElementsByClassName('radio-input');
console.log(radioInput);
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("submit button clicked");
});
// radioInput.forEach(radio => {
//   radio.addEventListener("click", function(e) {
//     console.log(e.target.value)
//   })
// })
radioInput[0].addEventListener("click", function (e) {
    console.log(e.target);
});
//# sourceMappingURL=index.js.map