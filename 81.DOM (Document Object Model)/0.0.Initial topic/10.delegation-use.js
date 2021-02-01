const form = document.forms[0]
const input = document.getElementById('productName')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')

function formEventInformation(e){
    e.preventDefault()
    console.log("Type: ",e.type)
    console.log("Input value: ", input.value)
    const li = document.createElement('li')
    li.textContent = input.value
    li.className = 'product-collection-item'
    ul.appendChild(li)
}

//event delegation
ul.addEventListener('click',(e)=>{
    if(e.target.className = "product-collection-item"){
        console.log(e.target)
    }
})
// li.forEach(li => {
//     li.addEventListener('click',formEventInformation)
// })
form.addEventListener('submit',formEventInformation)