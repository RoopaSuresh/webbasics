// Q)wap to print the pattern of a hollow full pyramid


for(let row=1;row<=4;row++)
{
    let str="";
    for(col=1;col<=7;col++){
    if(row==4 || row+col==5 || col-row==3)
    {
        str=str+"*";
    }
    else{
        str=str+" ";
    }
    }
    console.log(str);
}