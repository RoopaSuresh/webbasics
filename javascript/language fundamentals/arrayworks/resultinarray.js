var arr=[4,5,6]
//o/p [11,10,9]
var totalSum=0;
var output=[];
for(let num of arr){
totalSum=totalSum+num;
}
for(let num of arr){
output.push(totalSum-num)
}
console.log(output);