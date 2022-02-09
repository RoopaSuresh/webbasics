var pattern="ABABBCC"

//using for loop
var wc={}
for(let char of pattern)
{
    if(char in wc){
        console.log(`${char} is the first recursive character`);
        break;
    }
    else{
        wc[char]=1
    }
}