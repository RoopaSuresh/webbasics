var arr=[
    [10,20,[1,2]],
    [30,31,[[12,13,[10,20]]]]
]

//find the difference in each case
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(3)); // the numbers inside flat bracket is depth
console.log(arr.flat(4));