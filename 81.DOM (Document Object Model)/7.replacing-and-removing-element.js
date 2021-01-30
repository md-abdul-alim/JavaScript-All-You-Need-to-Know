const oldHeading = document.querySelector(".h1")
const newHeading = document.createElement('h1')
newHeading.appendChild(document.createTextNode("Updated product list"))
const container = document.querySelector(".container")
// container.replaceChild(newHeading,oldHeading)
////OR
oldHeading.replaceWith(newHeading)


const list = document.querySelectorAll(".product-collection-item")
console.log(list)

const list1 = document.querySelector('.product-collection')
console.log(list1.lastChild)
console.log(list1.lastElementChild)
list1.lastElementChild.remove()
console.log(list1)


const list2 = document.querySelector('.product-collection')
list2.removeChild(list2.lastElementChild)
console.log(list2)