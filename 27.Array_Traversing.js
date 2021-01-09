var arr= [1,2,3,4,5,6]

arr[0]
arr[2]
arr[arr.length-1]

for (m =0;m<arr.length;m++)
{
    console.log(arr[m])
}

for (m =0;m<arr.length;m++)
{
    arr[m] =arr[m] + 2
}
console.log(arr)

var sum = 0
for (m =0;m<arr.length;m++)
{
    sum += arr[m]
}
console.log(sum)

for (m =0;m<arr.length;m++)
{
    if(arr[m] % 2 ==0){
        console.log("Even Number: ",arr[m])
    }
}
