var num1=7;
var num2=6
var num3=8

if(num1>num2 && num1>num3){
    console.log("num1 is largest");
}
else if(num2>num1 && num2>num3){
    console.log("num2 is largest");
}
else if(num3>num1 && num3>num1){
    console.log("num3 is largest");
}

else if (num1==num2 && num1==num3){
    console.log("3 numbers are equal");
}
// single & -checks if both conditions are true or false
// double & - if first condition is false, no need to check next condition


// largest of 3 nos al
let num1=6;
let num2=6;
let num3=6;

if(num1>num2 && num1>num3){
    console.log(num1,"is the largest no");
}
else if(num2>num1 && num2>num3){
    console.log(num2,"is the largest no");
}
else if (num3>num1 && num3>num2){
    console.log(num3,"is the largest no");
}
else if(num1==num2 && num1==num3){
    console.log("all no's are equal");
}