var arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
console.log(arr[0][0])
console.log(arr[1][1])

for(var m=0;m<arr.length;m++)
{
    for(var n=0;n<=arr.length;n++)
    {
        console.log('Element '+m+':'+ arr[m][n])
    }
}