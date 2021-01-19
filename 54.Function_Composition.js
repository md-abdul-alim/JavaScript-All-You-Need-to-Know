//protom function er input hisebe 2nd function er output dia ke function composition bole
function print(inp){
    console.log(inp)
}

function multiplyByFive(n){
    return n*5
}
function add(a,b){
    return a + b
}
print(multiplyByFive(add(6,7)))