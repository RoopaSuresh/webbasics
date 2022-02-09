// var arr=[
//     [10,50],
//     [20,60],
//     [1,2],
//     [5,8],
//     [30,40]
// ]

//to get all the subarrays in a single array
// var singleArray=arr.flat()
// console.log(singleArray);


//print all numbers>10
// arr.flat().filter(num=>num>10).forEach(n=>console.log(n))


//print squares of all numbers
// arr.flat().map(num=>num**2).forEach(square=>console.log(square))


//print total sum
// var singleArray=arr.flat()
// var sum=singleArray.reduce((num1,num2)=>num1+num2)
// console.log(sum);


//print highest element
// var singleArray=arr.flat()
// var highest=singleArray.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(highest);




//next qn
// var string="hello"
// //print vowels from this string
// var stringToArray=Array.from(string)
// console.log(stringToArray);
// var vowels=["a","e","i","o","u","A","E","I","O","U"]
// for(char of stringToArray){
// if(vowels.includes(char)){
//     console.log(char);
// }
// }

//or
// var string="hello"
// var vowels=["a","e","i","o","u","A","E","I","O","U"]
// for(char of string){
// if(vowels.includes(char)){
//     console.log(char);
// }
// }

//same qn using array method
var string="hello"
var vowels=["a","e","i","o","u","A","E","I","O","U"]
Array.from(string).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))