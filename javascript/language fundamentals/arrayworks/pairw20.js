//Q) var arr=[2,3,4,5]
//find the pairs whose sum is 6 and print those pairs eg)2+4=6 =>(2,4)



//my method-wrong
// var arr=[2,3,4,5];
// let initial=arr[0];
// for(let num of arr){
//     if(initial+num==6)
//     {
//         console.log(initial,num);
//         initial++;
//     }
// }



//general method ie using 2 for loop
// var arr=[2,3,4,5];
// var sum=9;
// var count=0;
// for(let i of arr){
//     count++;
//     for(let j of arr){
// if(i+j==sum){
//     console.log(i,j);
//     break;
// }
//     }
// }
// console.log(count);




//method 2=>better approach
var arr=[2,3,4,5];
arr.sort((n1,n2)=>n1-n2)
var element=9;
var low=0;
var upp=arr.length-1;

while(low<upp){
    let currentSum=arr[low]+arr[upp];
    if(currentSum==element){
        console.log("pairs=",arr[low],arr[upp]);
        break;
    }
    else if(currentSum<element){
        low++;
    }
    else if(currentSum>element){
        upp--;
    }
}