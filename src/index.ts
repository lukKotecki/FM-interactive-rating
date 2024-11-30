
let radioInputs = document.getElementsByClassName('radio-input')
let num:number = 0;
console.log(radioInputs)

document.getElementById("submit")?.addEventListener("click", function(e) {
    e.preventDefault()
  console.log("submit button clicked")
})


const elements: Element[] = Array.from(document.getElementsByClassName("radio-input"));
elements.forEach((el: Element) => {
    el.addEventListener("click", function(e) {
      removeSelected();
      let num = (e.target as HTMLTextAreaElement).value;
      console.log(num);
      (e.target as HTMLTextAreaElement).classList.add("selected");
  })
})

function removeSelected() {
  elements.forEach((el) => {
       el.classList.remove("selected");
     });
     }
