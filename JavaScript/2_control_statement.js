//console.log("control statement")

// let age=18

//1.

// if(age>=18){
//     console.log("eligible")
// }
// //if condition becomes true then else if conditon wont be checked. 
// else if(age >15){
//     console.log("greater than 15")
// }
// else{
//     console.log("not eligible")
// }

//2.

// let age=18


// if(age>=18){
//     console.log("eligible")
// }

// if(age >15){
//     console.log("greater than 15")
// }
// else{
//     console.log("not eligible")
// }


//3.

// console.log("Switch Conditon")

// let month=2;

// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("March");
//         break;
        
//     default:
//         console.log("incorrect month")
//         break;    

// }

let num=16;

if (num >10 && num<15){
    console.log("inbetween 10 to 15 ");
}

else if(num >10 || num <10){
    console.log("number greater or less than 10");
}
//condition true but didnt execute bcoz only first true conditon will execute
else if(!(num <=15)){
     console.log("number greater than 15");
}

else{
    console.log("unknown number");
}

















