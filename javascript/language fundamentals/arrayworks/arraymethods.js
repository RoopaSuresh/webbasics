//ARRAY METHODS

// filter()
// Map()
// sort()
// reduce()
// find()
// some()
// forEach()

// arr=[10,11,12,13,14,15]
// Q1)squares of numbers
// var squares=arr.map(num=>num**2)
// console.log(squares);


//Q2)print cubes of numbers
// var cubes=arr.map(num=>num**3)
// console.log(cubes);


//Q3)print all even numbers
// even=arr.filter(num=>num%2==0)
// console.log(even);


//Q4)print all numbers greaer than 10
// var greaterNo=arr.filter(num=>num>10)
// console.log(greaterNo);





arr=[1,2,3,6,7,8]
//create an array if num<5 =>num-1 else num+1

// var array=arr.map(num=>num<5?num-1:num+1)
// console.log(array);

//Q2)sum
var total = arr.reduce((n1,n2)=>n1+n2)
console.log(total);

//Q3)minimum element
var minimum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minimum);

//Q4)maximum element
var maximum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maximum);