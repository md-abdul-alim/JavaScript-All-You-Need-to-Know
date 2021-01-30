let val
val = document.querySelector(".product-collection")

// val = val.childNodes
// console.log(val)

// val = val.childNodes[1]
// console.log(val)

// val = val.childNodes[1].nodeName
// console.log(val)

if(val.childNodes[1].nodeType !==3){
    val.childNodes[1].classList.add('MyClass')
}
console.log(val)