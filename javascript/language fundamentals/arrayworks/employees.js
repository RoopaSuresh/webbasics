var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
//Q1)print all employee names only

// for (let employee of employees){
//     console.log(employee[1]);
// }

//using array methods
// empNames=employees.map(emp=>emp[1])
// console.log(empNames);



//Q2)print no of employees in this company
// console.log(employees.length);

//using array methods



//Q3)print developer details only
// for (employee of employees){
//     if(employee[2]=="developer"){
//         console.log(employee);
//     }
// }

//using array method
// var developer=employees.filter(data=>data[2]=="developer")
// console.log(developer);


//Q4)print employee details whose salary>30000
// for (employee of employees){
//     if(employee[4]>30000){
//         console.log(employee);
//     }
// }

//using array method
// empDetails=employees.filter(salary=>salary[4]>30000)
// console.log(empDetails);



// Q5)print details of employee arjun
// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// }

//using array method
// details=employees.filter(data=>data[1]=="arjun")
// console.log(details);



// Q6)sort employees based on salary order by descending order
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);

//using array method





//Q7)sort employees based on experience order by ascending
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employees);


//Q8) total salary
var salaryList=employees.map(emp=>emp[4])
var totalSalary=salaryList.reduce((salary1,salary2)=>salary1+salary2)
console.log(totalSalary);

//or it can be written in chained format ie,
var salaryList=employees.map((emp=>emp[4])).reduce((salary1,salary2)=>salary1+salary2)


//min salary
var salaryList=employees.map(emp=>emp[4])
var minimumSalary=salaryList.reduce((salary1,salary2)=>salary1<salary2?salary1:salary2)
console.log(minimumSalary);