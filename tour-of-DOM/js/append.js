// needed steps
//1. parent node

const mainContainer = document.getElementById('main-container');

console.log(mainContainer);

//2. create child node

const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

//3. append child to parent

const ul = document.createElement('ul');

const li1= document.createElement('li');
li1.innerText = 'bandorban';

const li2= document.createElement('li');
li2.innerText = 'rangamati';

ul.appendChild(li1);
ul.appendChild(li2);
placesSection.appendChild(ul)

// finally append placesSection to the mainContainer

mainContainer.appendChild(placesSection);



//easier way is to create HTML

const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Higer Math</li>
    <li>Chemistry</li>
    <li>Biology</li>
</ul>
`

mainContainer.appendChild(booksSection);