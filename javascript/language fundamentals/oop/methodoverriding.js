class Parent{
    bike(){
        console.log("passion pro");
    }
}
class Child extends Parent{
bike(){
    console.log("highness");
}
}


var ch=new Child
ch.bike()

//parent and child will have same method, no of emthods etc  and only the last one will work- method over riding