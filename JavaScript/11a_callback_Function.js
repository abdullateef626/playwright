
function test(){
    console.log("Hello World")
} 

function test2(name,x){
    x()
    console.log(name)
}

test2("john",test)