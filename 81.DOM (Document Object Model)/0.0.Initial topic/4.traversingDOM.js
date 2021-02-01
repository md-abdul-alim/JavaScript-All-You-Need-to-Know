let val
val = document.querySelector(".product-collection")
//console.log(val)
// val = val.childNodes
// console.log(val)

// val = val.children
// console.log(val)

// val = val.children[2]
// console.log(val)

// val = val.children.length
// console.log(val)

// val = val.children[0].nextSibling
// console.log(val)

// val = val.children[0].nextElementSibling
// console.log(val)

// val = val.children[0].nextElementSibling.nextElementSibling
// console.log(val)

// val = val.children[0].nextElementSibling.nextElementSibling.parentElement
// console.log(val)

val = val.children[0].nextElementSibling.nextElementSibling.parentElement.parentElement
console.log(val)