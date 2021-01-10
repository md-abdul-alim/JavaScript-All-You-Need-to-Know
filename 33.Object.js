//empty object

var obj = {}
obj.x = 10
console.log(obj)
console.log(typeof obj)

var point = {
    x: 10,
    y: 20
}
point.z = 30
console.log(point)
//Object constructor

var oo=Object()
oo.pp=300
console.log(oo)
var o = new Object()
o.p=200
console.log(o)

console.log("-----Accessing Object Properties-----")

console.log(point.z)
console.log(point.z + point.y)

//Array notation: using array syntax
console.log(point['x'])

var show = 'z'
console.log(point[show])

console.log("-----Setting Object Properties-----")
//old
console.log(point)
point.x = 33
//new
console.log(point)
//new properties add
point.a = 44
console.log(point)
//undefined
console.log(point.b)

point['y']=100

var pro='z'
point[pro] =555
console.log(point)

console.log("-----Remove Object Properties-----")
point.a = undefined
console.log(point)

delete point.a
console.log(point)

console.log("-----Comparing two objects-----")

var obj1={
    a:10,
    b:20
}
var obj2={
    a:10,
    b:20
}
//memory location check korbe.tai false hobe equal na
console.log(obj1==obj2)
//first way
if (obj1.a ==obj2.a && obj1.b == obj2.b)
{
    console.log(true)
}else{
    console.log(false)
}
//second way
console.log(obj1)
//this will convert object data to string
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

console.log("-----Iterate Object Properties-----")

console.log('x' in point)
console.log('z' in point)

for (var i in point){
    console.log(i +":"+ point[i])
}
console.log("-----Object Methods-----")
console.log(Object.keys(point))
console.log(Object.values(point))
console.log(Object.entries(point))

//this will change the real value of obj1
// var obj2 = obj1
// obj2.a = 888
// obj2.b = 999
// console.log(obj1)
// console.log(obj2)

var obj3 = Object.assign({},obj2)
obj3.a=199
console.log(obj2)
console.log(obj3)