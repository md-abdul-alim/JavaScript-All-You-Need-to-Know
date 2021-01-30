// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
// https://developer.mozilla.org/en-US/docs/Web/Events

// const h2 = document.querySelector('h2')
// h2.addEventListener('click',function(e){//e event related info nia asbe
//     console.log(e)
//     console.log("Type: ",e.type)
//     console.log("Target: ",e.target)
//     console.log("offset-x: ",e.offsetX)
//     console.log("offset-y: ",e.offsetY)
//     console.log("Clicked h2")
// })

//or

const h2 = document.querySelector('h2')
// const li = document.querySelector('li')
const li1 = document.querySelectorAll('li')

function eventInformation(e){
    console.log("Target Value: ", e.target.innerText)
    console.log("Type: ",e.type)
    console.log("Target: ",e.target)
    console.log("offset-x: ",e.offsetX)
    console.log("offset-y: ",e.offsetY)
}
h2.addEventListener('click',eventInformation)
// li.addEventListener('click',eventInformation)
li1.forEach(li => {
    li.addEventListener('click',eventInformation)
})


//form related event
const form = document.forms[0]//first form ke target korlam
const input = document.getElementById('productName')

function formEventInformation(e){
    e.preventDefault()//this is only for form.this will prevent page loading after submitting form

    console.log("Type: ",e.type)
    console.log("Input value: ", input.value)
}
form.addEventListener('submit',formEventInformation)