var num=0;
if (num>0){
    console.log("positive");
}
else if(num<0){
    console.log("negative");
}
else{
    console.log(`no is zero`);
}
// or
console.log(num>0?"positive":"negative");
// or (by taking zero into account)
console.log(num>0?"positive":num<0?"negative":"zero");