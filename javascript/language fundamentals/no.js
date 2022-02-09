//Q)
// 2=2+22
//3=3+33+333
// 4=4+44+444+4444

//logic to get that pattern
//  var num=3;
// var i=1;
// var str="";
// var sum=0;
// while(i<=num){ //1<3  2<3
//     str+=num;//str="3" 
// console.log(str);
//     i++ 
// }


// to get its sum
var num=3;
var i=1;
var str="";
var sum=0;
while(i<=num){ //1<3  2<3
    str+=num;//str="3" 
    sum=sum+Number(str);
    i++ 
}
console.log(sum);

//different method
var num=3;
var i=1;
var sum=0;
var total=0;
while(i<=num){
    sum=sum*10+num;
    total+=sum;
    i++;
}
console.log(total);