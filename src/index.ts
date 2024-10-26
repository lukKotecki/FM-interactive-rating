
console.log('hel lo')

let radioInput = document.getElementsByClassName('radio-input')


console.log(radioInput)


document.getElementById("submit")?.addEventListener("click", function(e) {
    e.preventDefault()
  console.log("submit button clicked")
})

// radioInput.forEach(radio => {
//   radio.addEventListener("click", function(e) {
//     console.log(e.target.value)
//   })
// })


radioInput[0].addEventListener("click", function(e) {
  console.log(e.target)
})