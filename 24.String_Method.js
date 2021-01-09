var a = "I am"
var b = "Milon"

var c = a.concat(b)
console.log(c)
var c = a.concat(' ',b)
console.log(c)

//substring

var d = c.substr(5)
console.log(d)

var d = c.substr(5, 3)
console.log(d)

var d = c.substr(5, 4)
console.log(d)

console.log(c.charAt(5))
console.log(c.charAt(0))

console.log(c.startsWith("i"))
console.log(c.startsWith("I"))
console.log(c.startsWith("I am"))

console.log(c.endsWith("milon"))
console.log(c.endsWith("Milon"))

console.log(a.toUpperCase())
console.log(b.toLowerCase())

console.log('    Milon    ')
console.log('    Milon    '.trim())

console.log(c.split(' '))
console.log(c.split('a'))