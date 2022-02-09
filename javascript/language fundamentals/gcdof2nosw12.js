//wap to find gcd of two numbers(gcd=hcf)

var number1 = 48;
var number2 = 60;
var gcd = 1;
for (i = 1; i <= number2; i++) {

    if (number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}
console.log(gcd);

