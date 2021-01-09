var arr=[1,2,3,4,5,6,7,8]

for (var m=0;m<(arr.length/2);m++){
    var temp=arr[m]
    arr[m] = arr[arr.length-1 -m]
    arr[arr.length-1-m] = temp
}
console.log(arr)

//shortcut
a=[11,22,33,44,55,66,77,88,99]
console.log(a.reverse())