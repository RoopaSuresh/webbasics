//ITERATION -if we need to get one by one from an array
//in such case we need to use for loop
//eg)
// var frameWorks = ["express", "django", "flask", "fastapi", "angular", ".net", 1000] 
// for(let framework of frameWorks)
// {
//     console.log(framework);
// }






var expenses = [10000, 23000, 6000, 12000, 50000]
// //array index   0     1     2    3
// console.log(expenses[0]);
// console.log(expenses.length);

// console.log(expenses); //for printing just like an array

// for(amount of expenses)//to print one by one
// {
//     console.log(amount);
// }


//to find total expense
//method1
// var amount=expenses[0]+expenses[1]+expenses[2]+expenses[3]
// console.log(amount);
//method 1 cannot be used since we need to find the total expense even if one more expense is added. its not possible to always explicitly give the index number
//method 2
//     var total=0;
//     for(let amount of expenses){
//         total=total+amount;
//     }
// console.log(total);




//to find highest expense
//method 1=cannot be used=since we need to find the total expense even if one more expense is added. its not possible to always explicitly give the index number
//  if(expenses[0]>expenses[1]&&expenses[2]&&expenses[3])  
//  {
//      console.log(expenses[0]);
//  } 
//  else if(expenses[1]>expenses[0]&&expenses[2]&&expenses[3])
//  {
//      console.log(expenses[1]);
//  }
//  else if(expenses[2]>expenses[0]&&expenses[1]&&expenses[3])
//  {
//      console.log(expenses[2]);
//  }
//  else(expenses[3]>expenses[0]&&expenses[2]&&expenses[1])
//  {
//      console.log(expenses[3]);
//  }
//method 2
// var maxExpense=0;
// for(let amount of expenses){
//     if(maxExpense<amount){
//         maxExpense=amount
//     }
// }
// console.log(maxExpense)



//to find lowest expense
//method 1=cannot be used=since we need to find the total expense even if one more expense is added. its not possible to always explicitly give the index number
// if(expenses[0]<expenses[1]&&expenses[2]&&expenses[3])  
// {
//     console.log(expenses[0]);
// } 
// else if(expenses[1]<expenses[0]&&expenses[2]&&expenses[3])
// {
//     console.log(expenses[1]);
// }
// else if(expenses[2]<expenses[0]&&expenses[1]&&expenses[3])
// {
//     console.log(expenses[2]);
// }
// else(expenses[3]<expenses[0]&&expenses[2]&&expenses[1])
// {
//     console.log(expenses[3]);
// }
//method 2
// var minExpense = expenses[0]; //minexpense can't be assigned as zero since there isn't any value less than zero. so assign the array'sm first element as minimum expense
// for (let amount of expenses) {
//     if (amount < minExpense) {
//         minExpense = amount
//     }
// }
// console.log(minExpense)

