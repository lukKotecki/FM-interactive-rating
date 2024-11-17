"use strict";
var _a;
let radioInputs = document.getElementsByClassName('radio-input');
let num = 0;
console.log(radioInputs);
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("submit button clicked");
});
const elements = Array.from(document.getElementsByClassName("radio-input"));
elements.forEach((el) => {
    el.addEventListener("click", function (e) {
        removeSelected();
        let num = e.target.value;
        console.log(num);
        e.target.classList.add("selected");
    });
});
function removeSelected() {
    elements.forEach((el) => {
        el.classList.remove("selected");
    });
}
//# sourceMappingURL=index.js.map