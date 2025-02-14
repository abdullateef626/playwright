console.log("Nested For Loop")

let length=5;
//1.
for(var i=1;i<=length;i++){
    let r='';
    for(var j=1;j<=i;j++){
       r+=j;  // it means r=r+j
    }
    console.log(r);
}



// for(var i=1;i<=length;i++){
//     let r='';
//     for(var j=1;j<=i;j++){
//         r=r+i;
//     }
//     console.log(r);
// }
