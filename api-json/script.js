
const loadData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    // promise of respose 
      .then((response) => response.json())
    // promise of json data 
      .then((data) => console.log(data));
};



