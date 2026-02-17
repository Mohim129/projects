/**Problem 4*/
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

console.log(gonoVote(["ha", "na", "ha", "na", "ha", "na", "na"]))
console.log(gonoVote(["ha", "na", "ha", "na", "ha", "na"]))
console.log(gonoVote(["ha", "na", "ha", "na", "ha", "na", "ha"]))

