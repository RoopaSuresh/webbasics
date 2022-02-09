var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]


// print costly product detail reduce
// var costlyProduct= products.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
// console.log(costlyProduct);


// print outofstock products filter
// var outOfStock=products.filter(stock=>stock[3]==0)
// console.log(outOfStock);


// print oreo details find
// var oreoDetails=products.find(details=>details[1]=="oreo")
// console.log(oreoDetails);


// sort products based on available stock order by desc sort
// var stockOrder=products.sort((data1,data2)=>data2[3]-data1[3])
// console.log(stockOrder);


// print product details having maximum available stock reduce
// var maximumStock=products.reduce((stock1,stock2)=>stock1[3]>stock2[3]?stock1:stock2)
// console.log(maximumStock);

//is there any product whose stock is greter than 100?
// var moreThan=products.some(products=>products[3]>100)
// console.log(moreThan);

//is there products available at Rs 10?
// var atRs=products.some(product=>product[2]==10)
// console.log(atRs);

//is there any product between the range 10-20?
// var rangeProduct=products.some(product=>product[2]>=10 && product[2]<=20)
// console.log(rangeProduct);

//to get name of all products
products.forEach(p=>console.log(p[1]))