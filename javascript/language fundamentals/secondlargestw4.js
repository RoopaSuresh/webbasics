var num1=7;
var num2=6
var num3=8

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`${num2} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
  
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`${num1} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
  
    }

}
else if(num3>num1 && num3>num1){
    if(num1>num2){
        console.log(`${num1} is second largest`);
    }
    else{
        console.log(`${num2} is second largest`);
  
    }

}

else if (num1==num2 && num1==num3){
    console.log("all are equal");
}







// second largest al
const num1=5;
const num2=6;
const num3=2;
if(num1>num2 && num1>num2){
    if(num2>num3){
        console.log(num2,"is 2nd largest");
    }
    else if(num3>num2){
        console.log(num3,"is 2nd largest");
    }
}
if(num2>num1 &&num2>num3){
    if(num1>num3){
        console.log(num1,"is the 2nd largest");
    }
    else if(num3>num1){
        console.log(num3,"is the 2nd largest");
    }
}
if(num3>num1 &&num3>num2){
    if(num1>num2){
        console.log(num1,"is the 2nd largest");
    }
    else if(num2>num1){
        console.log(num2,"is the 2nd largest");
    }
}
else if(num1==num2 && num1==num3){
    console.log("all nos are equal");
}
