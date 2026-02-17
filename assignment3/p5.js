/*Problem 5*/
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




let text = "I am a little honest person"
analyzeText(text)
console.log(analyzeText(text))
let text2 = " "
console.log(analyzeText(text2))
let text3 = 12345
console.log(analyzeText(text3))
let text4 = ""
console.log(analyzeText(text4))
let text5 = ["hello", "world"]
console.log(analyzeText(text5))
let text6 = "Keep coding keep shining";
console.log(analyzeText(text6))
let text7 = "   "
console.log(analyzeText(text7))
let text8 = "H"
console.log(analyzeText(text8))
let text9 = " 12345  12345    12345 "
console.log(analyzeText(text9))


let obj = {
    person: "Jack",
    age: 50
}
// console.log(obj)
