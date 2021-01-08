// Arithmetic Operator
// = - * / % ++ --

// %(modulas/ reminder) : vag ses janar jonno use hoy
var a = 11
var b = 3
console.log('Reminder:',a%b)
// ++(incremental)
// Pre Incremental - Post Incremental
console.log('Before Increment',a)
console.log('Pre Incremental',++a) //Pre Incremental
console.log('Post Incremental',a++) // a=a+1 //Post Incremental(age print korbe.tar por increment hobe)
console.log('After Post Increment',a)

console.log(b--)
console.log(b)
console.log(--b)

console.log('--------------Assignment operator-------------')
var c=34
var d=32

c +=d
console.log(c)
c -=d
console.log(c)
c *=d
console.log(c)
c /=d
console.log(c)
c %=d

console.log('-------comparison Operators-------')
var m=10
var n=20
console.log(m == n)
console.log(m != n)
console.log(m > n)
console.log(m < n)
console.log(m >= n)
console.log(m <= n)

var p = '50'
var q = 50

console.log(p == q)// true // this will compare string to string, string to integer, integer to integer
console.log(p === q)// false // this will compare integer to integer only
console.log(p != q)

console.log('-------Logical Operators-------')
// &&
// ||
// !
console.log('-------Bitwise Operators-------')
// & ( 2 ta binary valuer modde and operation kora)
// | ( 2 binary modde or operation)
// ~ ( binary value te not operation)
// ^ ( binary value XOR operation)
// << (binary value left shift)
// >> (binary value right shift)
console.log('-------Type Operators-------')
console.log(typeof 10)
console.log(typeof "10")