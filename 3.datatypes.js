//Two types data in JavaScripts 
//1) primitive: this types are defined by JavaScripts.
//  i) Number: 1,2,3,4,5....
//  ii) String: "this is a string"
//  iii) Boolean: true/false
//  iv) Undefined: indicate false. kono kisu define kora na hole
//  v) null: indicate false. absence of a value. kono kisur value missing

//2) object: works with multiple data. object type comes form primitive.
//  i)Array ii)Object iii)Function


// //-------------------i)Number:-------------------------//
// var m =11
// var n =2.2
// var o = Number(101)
// console.log(o)

// var oo = Number("101.1")
// console.log(oo)

// console.log(Number.parseInt(oo))
// console.log(Number.parseFloat(oo))

// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// console.log(1/0)
// console.log('abc' * 10)

// //------------------ii)String--------------------//
// var str = 'String'
// var str1 = "String"
// var str2 = `String`

// var str3 = String('Hello string')
// var str4 = String(420)
// var str5 = String(333.33)

// console.log(str, str1, str2, str3, str4, str5)

// //------------------iii)Booleans--------------------//
// var b1 =true
// var b2 =false

// var b3 = Boolean(true)
// var b4 = Boolean(false)

// console.log(b1, b2, b3, b4)

// //------------------iv & v)Undefined vs null--------------------//

// // Undefined : A variable without value alwayes store Undefined
// // null : A variable with Unknown value can store Null. Null is a Special Type Used as a Absence of an Object

// var abc
// var xyz = null
// console.log(null)
// console.log(abc)

// //------------------Octal & Hexadecimal Number--------------------//

var hex = 0xff
console.log(hex)

var oct = 0756
console.log(oct)
