var a= [3,54,65,87,932,23,54,4,89,7,3]
var f=932
var isFound = false
for(var m = 0;m< a.length;m++)
{
    if(a[m] ==f){
        console.log("Data found at index: ", m)
        isFound = true
        break;
    }
}
if(!isFound){
    console.log("Data Not Found")
}