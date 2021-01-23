//Prototype: parent class

var obj = {}
console.log(obj)

var obj2 = new Object()
console.log(obj2)

console.log(obj.__proto__ == obj2.__proto__)
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(obj) == Object.getPrototypeOf(obj2))