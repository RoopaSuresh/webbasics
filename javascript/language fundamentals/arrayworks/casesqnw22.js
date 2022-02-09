var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// Q1) highest test + ve case district
var highestPve=covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
console.log(highestPve);


// Q2) district with higest 1 dose vaccination rate
   




// Q3) district with lowest death cases





// Q4) sort district with +ve cases
// covid_data.sort((data1,data2)=>data1[2]-data2[2])
// console.log(covid_data);

//using array method





// Q5) sort the districts based on 1st dose
// covid_data.sort((dose1,dose2)=>dose1[5]-dose2[5])
// console.log(covid_data);


//using array method





// Q6) is there any states with +ve cases > 60000
// for(let districtData of covid_data){
//     if(districtData[2]>60000){
//         console.log(districtData);
//     }
// }



//using array method

// greaterThan=covid_data.filter(cases=>cases[2]>60000)
// console.log(greaterThan);



// Q7) print trissur details
// for(let districtData of covid_data){
//     if(districtData[1]=="thrissur"){
//         console.log(districtData);
//     }
// }

//using array method
// districtData=covid_data.filter(details=>details[1]=="thrissur")
// console.log(districtData);


// Q8) total number of +ve cases






// Q9) total number of cured cases






// Q10) cured numbers of iduky
// for(let districtData of covid_data){
//     if(districtData[1]=="iduky"){
//         console.log(districtData[4]);
//     }
// }


//using array  method
// districtData=covid_data.find(cureNo=>cureNo[1]=="iduky")[4]
// console.log(districtData);










//Q)print all +ve case count
// var cases=covid_data.map(positive=>positive[2])
// console.log(cases);


//Q)print district and its +ve cases
// cases=covid_data.map(data=>[data[1],data[2]])