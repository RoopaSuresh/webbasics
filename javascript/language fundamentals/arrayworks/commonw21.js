//Q) var arr1=[10,11,12,20,30]
//var arr2=[11,20,21,30,31]
//find common numbers from the two arrays


// var arr1=[10,11,12,20,30];
// var arr2=[11,20,21,30,31];

// for(let num1 of arr1)
// {
//     for(let num2 of arr2)
//     { if(num1==num2)
// console.log("common numbers are",num1);
// }
// }



//better approach
var arr1=[10,11,12,20,30];
var arr2=[11,20,21,30,31];
var count=0;
var p1=0;
var p2=0;

while((p1<arr1.length)&& (p2<arr2.length))
{
  if(arr1[p1]==arr2[p2]){
      console.log("common element=",arr1[p1]);
      p1++;
      p2++;
  }
  else if(arr1[p1]<arr2[p2]){
      p1++;
  }
  else if(arr1[p1]>arr2[p2]){
    p2++;
}
count++;
}
console.log(count);