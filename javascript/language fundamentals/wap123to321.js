//Q)wap to convert 123 to 321(palindrome)

var num=123;
var str="";
while(num!=0){//123!=0
    let lastDigit=num%10; //123%10=3
    str+=lastDigit; 
    num=Math.floor(num/10);
}
console.log(str);
console.log(1%10)