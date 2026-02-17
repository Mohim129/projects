/** Problem 3 */

function finalScore (omr) {
        
          if(typeof omr !== "object" || Array.isArray(omr) === true || omr === null){
            return "Invalid";
          }
          else{
            let totalQuestions = omr.right + omr.wrong + omr.skip;
            if(totalQuestions !== 100|| typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number"){
                return "Invalid";
            }
            else{   
              let totalScore = omr.right - (omr.wrong*0.5);
              let score = Math.round(totalScore);
              return score;
            }
          }
}
console.log(finalScore({ right: 90, wrong: 10, skip: .5 }))
console.log(finalScore(null))




let array = [2, 5, 6, 7, 9, 11]
// console.log(typeof array);

// let result = finalScore({ right: "67", wrong: "23", skip: 10 })
// console.log(result);