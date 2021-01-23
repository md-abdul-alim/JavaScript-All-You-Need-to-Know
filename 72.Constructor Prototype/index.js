function Person(name){
    this.name = name
}

Person.prototype.PI = 3.1416 //adding by constructor prototype

var p1 = new Person("Milon")
var p2 = new Person("Alim")
console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype) //Constructor prototype

console.log(p1)
console.log(p2)