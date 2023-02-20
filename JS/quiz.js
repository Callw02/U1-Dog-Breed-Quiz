async function successful_login(resource){
    let body = document.querySelector("body")
    body.innerHTML = `
    <body>
    <div id="wrapper">
    <div id="logo_title">
        <img src="media/logo.png" alt="logo image">
        <div id="title">Dog Breed Quiz</div>
    </div>
    <div id="user_information">
        <p>${resource.data.user_name}</p>
        <button id="logout_button">logout</button>
    </div>
    <div id="dog_image"></div>
    
    <div id="options">
    </div>

    <footer> <p>The Dog Breed Quiz is made possible thanks to the free api by <span>DOG CEO Zine</span></p> </footer>

</div>`

localStorage.setItem("quiz_html", body.innerHTML)


}

let logout = document.querySelector("#logout_button").addEventListener("click", logout_function)

function logout_function(event){
    localStorage.removeItem("quiz_html")
    document.querySelector("body").innerHTML = `
    <div id="wrapper">
    <div id="logo_title">
        <img src="media/logo.png" alt="logo image">
        <div id="title">Dog Breed Quiz</div>
    </div>

    <h1>Login</h1>
    <div id="login">
        <div class="input">
            <h3>User Name:</h3>
            <input id="username_input" type="text">
        </div>

        <div class="input">
            <h3>Password:</h3>
            <input id="password_input" type="password">
        </div>
    </div>

    <p>Let the magic start!</p>

    <div id="button">
        <button>Login</button>
    </div>

    <div id="register_link">
        <p>New to this? Register For free</p>
    </div>

    <footer> <p>The Dog Breed Quiz is made possible thanks to the free api by <span>DOG CEO Zine</span></p> </footer>

</div>
    <script src="JS/login_register.js"></script>
    <script src="JS/quiz.js"></script>
    <script src="index.js"></script>`
}

get_dog()


async function get_dog(){
    let image_div = document.querySelector("#dog_image")
    let img = document.createElement("img")
    img.classList.add("dog_image")
    let dog_request = new Request("https://dog.ceo/api/breeds/image/random")
    let resource = await fetch_function(dog_request)
    img.src = resource.message
    image_div.appendChild(img)

    make_options(4, img.src)
}
function make_options(number, link){
    for(dog of ALL_BREEDS){
        
    }
    for(let i = 0;i < number;i++){
        let options = document.querySelector("#options")
        let button = document.createElement("button")
        button.classList.add("option_button")
        options.appendChild(button)

    }
}
