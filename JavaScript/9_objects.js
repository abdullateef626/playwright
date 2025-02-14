let a={
    name:"Mike",
    age:20,
    eligible:true,
    place:"india",

    additionalDetails:{
        customerId:101,product:"mobile",price:12999
    }
}

console.log(a) //to retrieve entire details

console.log(a.name) //to retrieve specific details

console.log(a.additionalDetails.product) //method 1:to retrieve value from object inside another object .

console.log(a['additionalDetails'].price) //method 2: to retrieve value from object inside another object.
