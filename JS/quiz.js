function successful_login(resource){
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
    

    <div class="options"></div>
    <div class="options"></div>
    <div class="options"></div>
    <div class="options"></div>
    

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