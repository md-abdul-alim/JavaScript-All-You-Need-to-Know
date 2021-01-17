var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4,8,-1,6,7,9,4,3,-5,6,8,-2,1,7]

arr.sort()
console.log(arr)

persons.sort()
console.log(persons)

//Using call back function

arr.sort(function(a,b){
    if(a>b){
        //ascending order
        return 1 //descending order: return -1
    }else if(a<b){
        //ascending order
        return -1 //descending order: return 1
    }else{
        return 0
    }
})
console.log(arr)

persons.sort(function(a,b){
    if(a.age >b.age){
        return 1
    }else if(a.age< b.age){
        return -1
    }else{
        return 0
    }
})
console.log(persons)

//check every number is even or odd
//even check
var arr = [4,8,6,7,9,4,6,8,2,-1]
var result = arr.every(function(value){
    return value % 2 ==0
})
console.log(result)
//positive value check
var result = arr.every(function(value){
    return value >=0
})
console.log(result)

//at least 1 odd number must be there
var result = arr.some(function(value){
    return value % 2 ==1
})
console.log(result)
//At least 1 negative must be there
var result = arr.some(function(value){
    return value<0
})
console.log(result)
