//there aree 3 types of iteration
//1) direct method ie using (of) in for loop
//2) using array index ie, using (in) in for loop and array position
//3)using array length ie, using (in) in for loop and array length


// eg)
var brands=["samsung","apple","realmi","infinix"]

//1)direct method
// for(let mobile of brands)
// {
//     console.log(mobile);
// }


//2)using array index
// for (let index in brands)
// {
//     console.log(brands[index]);
// }


//3)using array length
for(let i=0;i<brands.length;i++)
{
    console.log(brands[i]);
}