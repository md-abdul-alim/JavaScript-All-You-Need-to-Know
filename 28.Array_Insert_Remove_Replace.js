var arr = [1,2,3,4,5,6,7,8]

//arr[3] = 9
console.log(arr)

arr.push(9) //array sobar last e data set korbe
console.log(arr)

arr.unshift(0) //array sobar first a data set korbe
console.log(arr)

arr.splice(3,0,10,11)

console.log(arr)

arr.pop()//last elements remove
console.log(arr)

arr.shift()//fast elements remove
console.log(arr)

//por por 2 ta data remove 3 number elements teke
arr.splice(3,2)//(place,koyta elements,)
console.log(arr)

//replace
arr.splice(3,1,44)//(place,koyta elements,)
console.log(arr)
