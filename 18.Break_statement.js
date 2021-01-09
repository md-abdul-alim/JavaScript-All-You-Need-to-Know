
while(true){
    var rand = Math.floor(Math.random() * 10 +1)
    if (rand ==9){
        console.log("Whinner winner chicken Dinner")
        break
    }else{
        console.log("You have got " + rand)
    }
}

for (var a= 1;a<=5; a++)
{
    if (a % 5 ==0)
    {
        break
    }
    else{
        console.log(a)
    }
}