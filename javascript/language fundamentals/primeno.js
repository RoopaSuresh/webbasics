//BREAK and CONTINUE
//break- it exits from the entire loop
//continue- it will skip only that particular loop and perform all other loop


//flag=similar to temp

//wap to check if a number is prime or not

var num = 5, flag = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = 1;
        break;
    }

}
console.log(flag==0?"prime":"not prime");