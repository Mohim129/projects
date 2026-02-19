// console.log("working");


//Step--1: Set an Event handler to the button
document.getElementById('btn-post-comment').addEventListener('click', 
    function(){

    //Step-2: Get the text writted in the comment
        const commentTextBox = document.getElementById('comment-text-box')
        
        const commentInfo = commentTextBox.value;
    //Step-3: Get the parent node where we will publish the comment
        const commentContainer = document.getElementById('comment-container')

    //Step-4: Create a comment p and set the innerText
        const commentElement = document.createElement('p');
        commentElement.classList.add('comment')
        commentElement.innerText =  commentInfo;

    //Step-5: Append the new p tag to the parent Node
        commentContainer.appendChild(commentElement)

    //Step-6: Clean the text area
        commentTextBox.value='';
    }
)