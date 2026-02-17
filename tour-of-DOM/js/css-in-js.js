const sections = document.querySelectorAll('section');
// console.log(sections);
// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue'
// }


//dynamic class

for(const section of sections){
    // console.log(section);
    section.classList.add('section-card')
}

