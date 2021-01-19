{
    var x = 55

    function test(){
        var x = 44
        console.log(x)

        function nested(){
            var y = 77
            console.log(x)
            console.log(y) 
        }
        //console.log(y) //error
        nested()
    }
    test()
}