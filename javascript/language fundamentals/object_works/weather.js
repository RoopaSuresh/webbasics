var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20}
]

//print district with its max temp

var weatherOut={}
for(let record of data){
    let districtName=record["districtname"]
    let curTemp=record["weather"]
    if(districtName in weatherOut){
        let oldTemp=weatherOut[districtName]
        if(curTemp>oldTemp){
            weatherOut[districtName]=curTemp
        }
    }
    else{
        weatherOut[districtName]=curTemp
    }
}
console.log(weatherOut);

//sort temp in descending order
console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]));