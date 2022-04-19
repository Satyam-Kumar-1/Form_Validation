// document.getElementById("submit").addEventListener("click",validateform)
function validateform(){
    var name= document.getElementById("name");
    var Mobno= document.getElementById("mobno");
    var email= document.getElementById("emailid");
    var pincode = document.getElementById("pin");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pinCheck= /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    
    if(name.value==""){
        alert("Please Enter your name");
    }
        else if(!(isNaN(name.value))){
        alert("Please Enter Valid Name");
    }
       else if(Mobno.value==""){
        alert("Please Enter your Mobile Number ");
    }
        // else if((isNaN(Mobno.value))||(Mobno.value==0000000000)||(!is(Mobno.value.match(phoneNum)))){
            else if(!(Mobno.value.match(phoneNum))){
             alert("Please Enter Valid Mobile Number");
    }
    else if(email.value==""){
        alert("Please Enter your Email Id");
    }
        else if((!is(email.value.match(mailformat)))){
        alert("Please Enter Valid mail");
        }
    else if(pincode.value==""){
        alert("Please Enter your Pin Code");
    }
        else if(pincode.value.match(pinCheck)){
         alert("Please Enter Valid pin code");
        }
    
}