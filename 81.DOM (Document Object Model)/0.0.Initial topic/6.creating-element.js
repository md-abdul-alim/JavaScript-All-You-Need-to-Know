const ul = document.querySelector("ul")
const li = document.createElement('li')
console.log(li)
li.className = 'product-collection-item' //add class name
li.appendChild(document.createTextNode('Add li'))
ul.appendChild(li)//add li inside ul//this will add at last
ul.prepend(li)//this will add a first

console.log(ul)