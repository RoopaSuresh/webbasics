// typeof(name of the thing whose type is to be identified) //this syntax will give you the datatype of that particular thing
var num=10; 
console.log(typeof(num));
var avg=10.5
console.log(typeof(avg));
var c_name="luminar"
console.log(typeof(c_name));
var isVaccinated=true
console.log(typeof(isVaccinated));

// number,string,undefined,null,boolean



var num1=10,num2="10"
console.log(num1==num2); //when double equal to is given, javascript wil only compares the value and not the datatypes. hence the o/p is true


var num1=10,num2="10"
console.log(num1===num2);  //when triple equal to is given, javascript will compare both value and datatype. hence the o/p is false

var num1=10,num2="10.0"
console.log(num1==num2);//here the o/p will be true since there is no float in javascript and everything is a number in javascript 
