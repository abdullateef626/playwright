let a = {
    name:"john",
    age : 20,
    country:"india"    ,

    output: function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.country)
    },
}

const obj=new Object(a.output());


