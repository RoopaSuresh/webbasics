//Array's problem is that we need to constantly calculate the index position to get value at that position.
//eg
// var expenses=[10000,20000,30000,35000,40000,50000]
//if we need to calculate the expense of march,
// console.log(expense[3]);

//but when it comes to object, each value consist of corresponding key/property
//object is represented in curly brackets
//we can convert the same qn into object
// var expenses={
//     jan:10000,
//     feb:20000,
//     march:30000,
//     april:35000,
//     may:40000,
//     june:50000
// }
//here each value is identified uniquely using its key

//create object for employee(like that we did in array)
var employee={
    id:1000,
    emp_name:"ram",
    designation:"developer",
    salary:25000,
    exp:1
}
//print employee name from this
//method 1
// console.log(employee["emp_name"]);
//method 2
// console.log(employee.emp_name);



//create a student object with roll no, name,course,total
// var studentData={
//     name:"Roopa Suresh",
//     roll_no:1,
//     course:"mearnstack",
//     total:39500
// }
//print student's name and course
//student name
// console.log(studentData.name);
// //or
// console.log(studentData["name"]);
// //course name
// console.log(studentData["course"]);
// //or
// console.log(studentData.course);



//TO CHECK IF A KEY/PROPERTY IS PRESENT OR NOT
//Qn)to check if there is experience key in employee data
// console.log("exp" in employee);
//qn)check if there is gender in employee data
// console.log("gender" in employee);


//ADD NEW PROPERTY VALUE
//eg qn) add gender to employee data
// employee["gender"]="male"
// console.log(employee);
//or
// employee.gender="male"
// console.log(employee);


//eg2)add isVaccinated:true to employee data
// employee["isVaccinated"]="true"
// console.log(employee);

////eg3)add Vaccine:covishield to employee data
// employee["vaccine"]="covishield"
// console.log(employee);

//If we need to update a value
//eg)we need to change the vaccine to covaccine
// employee.vaccine="covaccine"
// console.log(employee);


//TO ADD A VALUE TO ALREADY EXISTING VALUE
// employee.exp+=2
// console.log(employee);


//IF WE NEED TO PRINT ALL KEY VALUES
// for(let key in employee){
//     console.log(key);
// }

//IF WE NEED TO PRINT VALUE OF ALL KEYS
// for(let key in employee){
//     console.log(key);
//     console.log(employee[key]);
// }

