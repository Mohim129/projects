// document.getElementById('player-container').childNodes[3].childNodes[2].parentNode

//create element and set innerText
const newChild = document.createElement('li')

newChild.innerText = "New Born Footballer";


//find the parent where you will add the child

const playersList = document.getElementById("player-list");

// append the child to the parent 

playersList.appendChild(newChild);