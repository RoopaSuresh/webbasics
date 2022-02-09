// var arr=[10,10,20,20,30,30,40,40,50,50,50]

// var wc={}

// for(let num of arr){
//     if(num in wc){
// wc[num]+=1
//     }
//     else{
//         wc[num]=1
//     }
// }
// console.log(wc);


products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  ];
  
  
  
  
  // # print product names only
// for(let mobiles of products){
//     console.log(mobiles.p_name);
// }
//or
// products.forEach(mobile=>mobile.p_name)


  // # print all mobile details whose display="amoled"
// products.filter(disp=>disp.display=="amoled").forEach(mob=>console.log(mob))

//or
// for(let mobile of products){
//     if(mobile.display=="amoled"){
//         console.log(mobile);
//     }
// }

  // # print 5g mobile names
// products.filter(band=>band.band=="5g").forEach(mob=>console.log(mob))
//or
// for(let mob of products){
//     if(mob.band=="5g"){
//         console.log(mob);
//     }
    
// }

  // # filter mobiles based on price
// products.sort((price1,price2)=>price1.price-price2.price).forEach(mob=>console.log(mob))

  // # print costly mobile
