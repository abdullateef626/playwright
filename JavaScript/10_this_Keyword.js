//here we create function inside that we use this keyword.

function details(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    console.log("name :"+name+" Age :"+age+" place :"+place)
}

function details_2(){
    name="jack"
    age=25
    place="bangalore"
    console.log("name :"+name+" Age :"+age+" place :"+place)
}

details("john",23,"chennai")

details_2()