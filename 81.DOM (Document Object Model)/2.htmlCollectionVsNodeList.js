let val
val =document.getElementsByClassName("product-collection-item")
console.log(val)
for (let i = 0;i<val.length; i++){
    console.log(val[i])
}
console.log("---------------")
for(let node of val){
    console.log(node)
}
console.log("--foreach--")
val = Array(val);
val.forEach(node => console.log(node))

console.log("--NodeList--")
val = document.querySelectorAll(".product-collection-item")
console.log(val)