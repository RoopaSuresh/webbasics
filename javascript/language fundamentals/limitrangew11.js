//Q) var num=2
//var lowLimit=8
//var upperLimit=36
//2*2=4(does not belong to the given range of lowerlimit)
//3*3=9(belongs to the range of upperlimit and lower limit. Hence print 3)
//4*4=16(belongs to the range of upperlimit and lower limit. Hence print 4)
// 5*5=25(belongs to the range of upperlimit and lower limit. Hence print 5)
// 6*6=36(belongs to the range of upperlimit and lower limit. Hence print 6)
//7*7=49(does not belong to the given range of upperlimit)
//similarly if var num=3
//2*2*2=8(belongs to the given range of lowerlimit and upperlimit. Hence print 3)
//3*3*3=27(belongs to the range of upperlimit and lower limit. Hence print 3)
//4*4*4=64(does not belong to the range of upperlimit and lower limit)

var num=2;
var lowerLimit=8;
var upperLimit=36;
var range=0;
var i=2;
while(range<=upperLimit)
{
    range=i**num;
    // if(lowerLimit<=range<=upperLimit)
    if(range>=lowerLimit && range<=upperLimit)
    {
        console.log(i);
    }
    i++;

}