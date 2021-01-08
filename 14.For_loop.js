var sum = 0;
for (var i = 1; i<= 5; i++)
{
    console.log(sum + '+' + i + '=' + (sum+i))
    sum +=i
}
console.log('result = ', +sum)