//wap to find armstrong number
//eg)153,370,371,407
//ie, 153=(1*1*1)+(5*5*5)+(3*3*3) =153
//370=(3*3*3)+(7*7*7)+(0*0*0)=370

var num=370;
var digit=0;
var cube=0;
var sum=0;
while(num!=0)
{
    digit=num%10;
    cube=digit**3;
    sum=sum+cube;
    num=Math.floor(num/10);
}
console.log(sum);