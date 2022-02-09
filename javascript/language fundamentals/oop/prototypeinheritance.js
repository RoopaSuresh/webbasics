var baleno={
    manufacture:"nexa",
    price:10,
    variants:["manual"],
    color:["red","blue"]
}
var glanza={
    manufacture:"toyota",
    price:12
}


// console.log(glanza.variants);
//this will not work since there is no variant in glanza.
//In such cases we use prototype inheritance

glanza.__proto__=baleno
//now we can derive anything from baleno through glanza
console.log(glanza.variants);
console.log(glanza.color);