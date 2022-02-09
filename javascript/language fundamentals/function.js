// functions- used to perform a specific task
//eg)typeof(), eval()

//syntax to create our own function
//function functionName(param1,param2,param3........paramn)
// { function definition
// return result
// }

// eg0)
// var expression="12+3*5/10";
// console.log(eval(expression));



// eg1)
// function eval(expression) {
//     return res
// }
// //
// console.log(eval(10+2*3));




//eg2)to add 2 nos
// function add(num1,num2) {
//     let res=num1+num2;
//     return res
// }

// console.log(add(10,20));




// //eg3)to find cube
// function cube(num) {
//     let res=num**3;
//     return res
// }

// console.log(cube(2));





//eg4)numcheck ie, to check if a number is even or odd
// function numcheck(num) {
//     if(num%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// console.log(numcheck(2));






// eg6)sub
// function subtraction(num1,num2) {
//     res=num1-num2
//     return res
// }

// console.log(subtraction(20,10));









//eg7)smart sub ie, the answer should be same if input is 10-5 and 5-10
// function smartSubtraction(num1,num2) {
//     if(num1>num2){
//         res=num1-num2
//         return res
//     }
//     else{
//         res=num2-num1
//         return res
//     }
// }

// console.log(smartSubtraction(5,10));

// eg7 or method ie, using terinary operation
// function smartSubtraction(n1,n2) {
//     return n1>n2?n1-n2:n2-n1
// }

// console.log(smartSubtraction(2,8));






// eg8)print odd or even based on the number given
// function numCheck(num) {
//     if(num%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(numCheck(4));

// eg8 or method ie using terinary operation)
// function numCheck(num) {
//     return num%2==0?"even":"odd"
// }
// console.log(numCheck(5));



// to check the count of a string use .length
//eg)
// var phoneNumber="98989898983"
// console.log(phoneNumber.length);



// eg9)validate phone number ie, return true if phone number consist of 10digits or else return false
// function phoneNumber(n1) {
//     if(n1.length==10)
//     {
//         return "true"
//     }
//     else{
//         return "false"
//     }
// }

// console.log(phoneNumber("944648000"));
//eg9or method)
//  function phoneNumber(pno){
// return pno.length==10?"true":"false"
// }
// console.log(phoneNumber("9777777"));





//Q)how to find with what letter a string starts? 
//Ans) use [position]
//eg
// name="hello"
// console.log(name[2]);



//Q)how to find with what the string ends with?
//Ans)use .endsWith(required word)
//eg)
var companyName="luminarTechnolab"
console.log(companyName.endsWith("lab"))