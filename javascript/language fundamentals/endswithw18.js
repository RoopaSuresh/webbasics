// Q) function validateGmail(email)
// {
//     //return true if email ends with @gmail.com else return false
// }


function validateGmail(email) {
    if(email.endsWith("@gmail.com")){
        return "true"
    }
    else {
        return "false"
    }
}

console.log(validateGmail("abc@gmai.com"));
