//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
          if( typeof currentPrice !== "number" || typeof discount !== "number" || discount>100 || discount<0){
                        return "Invalid";
          }
          else{
            let discountPrice = currentPrice*(discount/100);
            let total = currentPrice - discountPrice;
            let finalPrice = total.toFixed(3)
            return finalPrice;
          }
}


//Problem-02: OTP Validation for Zapshift
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

//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
        
          if(typeof omr !== "object" || Array.isArray(omr) === true || omr === null){
            return "Invalid";
          }
          else{
            let totalQuestions = omr.right + omr.wrong + omr.skip;
            if(totalQuestions !== 100 || typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number"){
                return "Invalid";
            }
            else{   
              let totalScore = omr.right - (omr.wrong*0.5);
              let score = Math.round(totalScore);
              return score;
            }
          }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (Array.isArray(array) === false) {
        return "Invalid";
    }
    else {
        let haCount = 0;
        let naCount = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "ha") {
                haCount++;
            }
            else if (array[i] === "na") {
                naCount++;
            }
        }
        if (haCount > naCount) {
            return true;
        }
        else if (naCount === haCount) {
            return "equal";
        }
        else {
            return false;
        }
    }
}


//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {

    if(typeof str !== "string" ){
        return "Invalid";
    }
    else{
        if(str.length === 0){
            return "Invalid";
        }
        else{
            let words = str.split(" ")
            let tokens = 0;
            let largest = "";
            for (let word of words) {
                tokens = tokens + word.length;
                if(word.length > largest.length){
                    largest = word;
                }
            }
            if(tokens===0){
                return "Invalid";
            }
            else{
                let result= { longwords: largest, token: tokens }
                return result;
            }
        }

    }
}


