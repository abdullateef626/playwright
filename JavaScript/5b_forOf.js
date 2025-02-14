console.log("ForOf")

var num=[1,2,3,4,5,6];

//here 
for (const value of num) {
    
        console.log(value)
        if(value==4){
            break 
        }

   
}

var names=["a","b","c","d"]
var count=0
for (const res of names) {
    count++
    console.log(res)

    if(count==2){
        break
    }
}