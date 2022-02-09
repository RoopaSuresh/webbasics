var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]



  //  q1  total number accounts
// console.log(accounts.length);
   
//q2  print all account numbers whose ac-type savings
// accounts.filter(data=>data.ac_type=="savings").forEach(account=>console.log(account.acno))


//q3 print balance of acno=1000
// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);



//q4 print all g-pay transaction details
// var allTransactions=accounts.map(data=>data.transactions)
// // console.log(allTransactions);
// var flat=allTransactions.flat()
// // console.log(flat);
// var gpay=flat.filter(transaction=>transaction.method=="g-pay")
// console.log(gpay);


// Q)print all transaction whose transaction amount>500
// var allTransactions=accounts.map(data=>data.transactions)
// var flat=allTransactions.flat()
// var amtgreater=flat.filter(amt=>amt.amount>500)
// console.log(amtgreater);




//q5 print credit transcation's of 1002
var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(creditTrans);


//Q print debit transaction of 1002
var debitTransaction=accounts.find(data=>data.acno==1002).transactions
console.log(debitTransaction);


//q6 print highest balance account details
// var highestBalance=accounts.reduce((bal1,bal2)=>bal1.balance>bal2.balance?bal1:bal2)
// console.log(highestBalance);


// q7 print transaction history of 1002

var transactionHistory=[]
for(let t of creditTrans){
  transactionHistory.push(t)
}
for(let t of debitTransaction){
  transactionHistory.push(t)
}
console.log(transactionHistory);

//or
var transactionHistory={debitTran:debitTransaction,creditTran:creditTrans}
console.log(transactionHistory);

//or using spread operator
var transactionHistory=[...creditTrans,...debitTransaction]
console.log(transactionHistory);