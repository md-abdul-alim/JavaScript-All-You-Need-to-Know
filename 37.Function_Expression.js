//variable er modde function hold kora ke expression bole. r ei function er kono name takbena
var add = function (a,b){
    return a+b
}
add(33,22)
setTimeout(function(){
    console.log("This will call after 5 second")
},5000)//5 second por ei function ta excuate hobe

//though another console log is called after setTimeout.but another will call first.this system call asynchronous
var another = add
console.log(another)