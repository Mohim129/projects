// Update Text Button

document.getElementById('btn-update-title').addEventListener('click',
    function (){
        // console.log('button working');
        const pageTileElement = document.getElementById('page-title')
        // console.log(pageTileElement);
        pageTileElement.innerText = "Updated Page Title Text."

    }
)


// Login Button

document.getElementById('btn-login').addEventListener('click',
    function(){
        // console.log("Working")
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = "You Have Logged In";
    }
)

//Handle input text

document.getElementById('btn-update').addEventListener('click', 
    function(){
        // console.log('yooo')
        //1.get the text for the input
        const nameInput = document.getElementById('input-name');
        const name = nameInput.value;
        //  console.log(name)
        //2.
        const nameP = document.getElementById('name');
        nameP.innerText = name;

    }
)