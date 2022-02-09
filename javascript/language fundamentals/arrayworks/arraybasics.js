//ARRAYS
//array is a collection of different datas that can be refered to using the same reference name


//array is defined using square brackets[]


//Q)Is there any length limit for array?
//Ans)size of array in javascrip t is not limited, while that in c,c++etc is limit. we need to explicitly give array length in such cases.


//eg of an array
var frameWorks = ["express", "django", "flask", "fastapi", "angular", ".net", 1000] 
//it can have different datatypes in a single array. here it is string and number


//array index number- array is fetch by its index number. it starts from 0
var frameWorks = ["express", "django", "flask", "fastapi", "angular", ".net", 1000] 
//index number=       0         1          2        3         4          5      6


var frameWorks = ["express", "django", "flask", "fastapi", "angular", ".net", 1000] 
//if we need to access "express" from the given array ,its array index=0 ie,
console.log(frameWorks[0]); //by doing this we will get the object at position 0 or express
//this is because array is a linear datastructure. ie, it is stored in sequential order of the memory.


//Q)how to find how many objects are there in array?
//Ans)just like finding length of a string, we can use .length property to find the no of objects in an array
//this is a property not a method
//eg)
var frameWorks = ["express", "django", "flask", "fastapi", "angular", ".net", 1000] 
console.log(frameWorks.length);


