var array = [10, 11, 1, 2, 3, 14];
// var element = 15;
// var flag = 0;
// for (let no of array) // of gives values in an array
// {
//     if (no == element) {
//         flag = 1;
//         break;
//     }
// }
// console.log(flag==0?"element not found":"element found");


//checking the position of that patrticular element
var flag=0;
var element=2;
for(indexPosition in array) //in gives position of values in an array
{
    if(array[indexPosition]==element){
        console.log(indexPosition);
        f=1;
        break;
    }
}
console.log(flag==0?"not found":"found");