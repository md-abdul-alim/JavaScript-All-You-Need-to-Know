var person = {
    name: 'Abdul Alim'
}
console.log(person)

for (var m in person){
    console.log(m)
}

console.log(Object.keys(person))

var descriptor1 = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor1)

let baseObj = Object.getPrototypeOf(person)
let descriptor2 = Object.getOwnPropertyDescriptor(baseObj, 'toString')
console.log(descriptor2)

Object.defineProperty(person, 'name',{
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'Alim Milon'
})