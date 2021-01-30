// console.log(document.head)
// console.log(document.body)
// console.log(document.documentURI)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.contentType)
// console.log(document.width)

// console.log(document)
// console.dir(document)
// let val = document
// val = document.head
// val = document.body
// val = document.all
// val = document.all[5]
// val = document.title
// val = document.links
// val = document.links[0]
// val = document.characterSet
// val = document.body.className
// val = document.body.id
// val = document.forms
// val = document.forms[0]
// val = document.forms[0].action
// val = document.forms[0].method
// val = document.scripts
// console.log(val)

let value
// value= document.getElementById('container')
// // console.dir(value)
// console.log(value)

// value= document.getElementsByClassName('container')
// console.log(value)

// value= document.getElementsByClassName('container')[0]
// console.log(value)

// value = document.getElementsByTagName('body')
// console.log(value)

// value = document.getElementsByTagName('body')[0]
// console.log(value)

// //query selector is faster
// value = document.querySelector('body')
// console.log(value)

// value = document.querySelector('#container')
// console.log(value)

value = document.querySelector('.product-collection-item')
console.log(value)
value = document.querySelectorAll('.product-collection-item')[2]
console.log(value)
value = document.querySelectorAll('.product-collection-item')
console.log(value)
