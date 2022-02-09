var text="hello hai hello hai"
//print word count
//step1 split the string into words(based on space)
// var words=text.split(" ") //it will be converted to an array now
// var wordcount={}
// for(let word of words){
//     if(word in wordcount){
// wordcount[word]+=1
//     }
//     else{
//         wordcount[word]=1
//     }
// }
// console.log(wordcount);

//same thing using arraymethod
var wordcount={}
text.split(" ").map(word=>word in wordcount?wordcount[word]+=1:wordcount[word]=1)
console.log(wordcount);