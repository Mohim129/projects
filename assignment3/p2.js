/*Problem 2*/
function validOtp(otp) {

    if(typeof otp !== "string"){
            return "Invalid";
    }
    else{
        if(otp.startsWith("ph-")){
               
            if(otp.length === 8){
            return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}



console.log(validOtp("ph-109885"))

// validOtp("FASDF")