
console.log('hel lo')

let radioInput = document.getElementsByClassName('radio-input')


console.log(radioInput)


document.getElementById("submit")?.addEventListener("click", function(e) {
    e.preventDefault()
  console.log("submit button clicked")
})



const elements: Element[] = Array.from(document.getElementsByClassName("radio-input"));
elements.forEach((el: Element) => {
    el.addEventListener("click", function(e) {
      let num = e.target;
        console.log(num)
  })
})

// radioInput.forEach(radio=> {
//   radio.addEventListener("click", function(e) {
//     console.log(e.target.value)
//   })
// })

let chosenRating:Number = 0;



// radioInput[0].addEventListener("click", function(e) {
//     const element = e.currentTarget as HTMLInputElement;
//     console.log(chosenRating);    
//     chosenRating = Number(element.value);
//     console.log(chosenRating);    
// })




