function test( ){
    console.log("test1")
}
function test2( ){
    console.log("test2")
}
function test3( ){
    console.log("test3")
}
function test4( ){
    console.log("test4")
}
function test5( ){
    console.log("test5")
}

function res(a,b,c,d,e){
 a()
 b()
 c()
 d()
 e()   
}

res(test,test2,test3,test4,test5)