var baleno={
    name:" baleno",
    model:"hatchback",
    manufacture:"maruti",
    price:"10lacs"
}

//print manufacture
// console.log(baleno.manufacture);


//check if there is 
// if("model" in baleno){
//     console.log(baleno.model);
// }

//add variant. Here there are more than one possibilities. so give it in array
baleno.variant=["manual"]
console.log(baleno);
//we can add more to variant using push
baleno.variant.push("automatic")
console.log(baleno);

baleno.colour=["red"]
console.log(baleno);
baleno.colour.push("blue")
console.log(baleno);