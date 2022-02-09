//create a new class student of setstudent(roll,studentname,total). also printdetails()

// class student{
//     setStudent(roll,stdName,total){
//         this.rollNo=roll;
//         this.studentName=stdName;
//         this.total=total;
//     }
//     printDetails(){
//         console.log(this.rollNo,this.studentName,this.total);
//     }
// }

// var std1=new student()
// std1.setStudent(1,"Roopa",5)
// std1.printDetails()


//replace set with constructor
class student{
    constructor(roll,stdName,total){
        this.rollNo=roll;
        this.studentName=stdName;
        this.total=total;
    }
    printDetails(){
        console.log(this.rollNo,this.studentName,this.total);
    }
}

var std1=new student(1,"Roopa",5)
std1.printDetails()

