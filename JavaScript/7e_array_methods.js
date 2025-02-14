console.log("map")


let a=[10,20,30,40,50]

let add=a.map(res =>res + 10);
console.log(`addition ${add}`)

let sub=a.map(res =>res -10)
console.log(`Subtration ${sub}`)

let mul=a.map(res =>res * 10)
console.log(`multiplication ${mul}`)

let div=a.map(res => res /2)
console.log(`division ${div}`)

let mod=a.map(res => res % 3)
console.log(`modules ${mod}`)