console.log("Array Methods Splice")

var names=["a","b","c","d","e","f"]
names.splice(1,2,"apple","mango")  
//here we give start point and end point of array to remove (here it removes b and c)
// replace with apple and mango.
console.log(names)


var place=["chennai","bangalore","puducherry","delhi"]
place.splice(2,0,"kerala")//here we store values on index 2 without removing any values.
console.log(place)