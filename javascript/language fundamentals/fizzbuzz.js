// Q)var num=18 print fizz if number/3, print buz if num/5, print fizzbuzz if num/15

var num=15;
if(num%15==0){
    console.log("fizzbuzz");
}
else if(num%5==0){
    console.log("BUZ");
}
else if(num%3==0){
    console.log("FIZZ");
}
// or
console.log(num%3==0?"fizz":num%5==0?"buz":"fizzbuzz");

// or
var num=15;
var str=""
if(num%3==0){
    str+="fizz"
}
if(num%5==0){
    str+="buzz"
}
console.log(str);