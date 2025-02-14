let a = {
    name:"john",
    age : 20,
    country:"india"  ,

    output: function(name,age,country){
        this.name=name,
        this.age=age,
        this.country=country    
        console.log("name :"+name+" age :"+age+" country :"+country)
    },

    result : (id,product) =>{
        this.id=id
        this.product=product
        console.log(" id : "+id+" product : "+product)
    }
}

const obj=new Object(a.output("jack",25,"USA"));
const obj2=new Object(a.result(101,"mobile"))
