//blank page to do pgms

var arr=[10,11,12,15,16,17];
var element=15;
var low=0;
var upp=arr.length-1;
var flag=0;
while(low<upp){
    let mid=Math.floor((low+upp)/2);
    if(element==arr[mid]){
flag=1;
        break;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1;
    }
}
console.log(flag==0?"not found":"found");
