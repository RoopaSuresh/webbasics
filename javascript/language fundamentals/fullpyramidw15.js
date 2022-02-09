//Q)wap to print the pattern of a full pyramid


//method 1
// for(let row=1;row<=4;row++)
// {
//     let str="";
//     for(let space=4;space>row;space--)
//     {
//         str=str+" ";//two space
//     }
//     for (let col=1;col<=row;col++)
//     {
//         str=str+"*  ";//star +two space
//     }
//     console.log(str);
// }



//method 2
for(let row=1;row<=4;row++)
{
    let str="";
    for(let space=1;space<=(4-row);space++)
    {
        str=str+" ";//two space
    }
    for (let col=1;col<=row;col++)
    {
        str=str+"*  ";//star +two space
    }
    console.log(str);
}
