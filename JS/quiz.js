"use strict"
async function successful_login(name){
    let body = document.querySelector("body");
    body.innerHTML = `
    <body>
    <div id="wrapper">
    <div id="logo_title">
        <img src="media/logo.png" alt="logo image">
        <div id="title">Dog Breed Quiz</div>
    </div>
    <div id="user_information">
        <p>${name}</p>
        <button id="logout_button">logout</button>
    </div>
    <div id="dog_image"></div>  
    <div id="options">
    
    </div>
    
    <footer> <p>The Dog Breed Quiz is made possible thanks to the free api by <span>DOG CEO Zine</span></p> </footer>

</div>`
   
    document.querySelector("#wrapper").classList.add("quiz_page");
    document.querySelector("#logout_button").addEventListener("click", logout_function);
    localStorage.setItem("quiz_html", body.innerHTML);
    get_dog()
}


document.querySelector("#logout_button").addEventListener("click", logout_function);

get_dog();

function logout_function(event){
    localStorage.removeItem("quiz_html");
    document.querySelector("body").innerHTML = `
    <div id="wrapper">
    <div id="logo_title">
        <img src="media/logo.png" alt="logo image">
        <div id="title">Dog Breed Quiz</div>
    </div>

    <h1>Login</h1>
    <div id="login">
        <div class="input_field">
            <h3>User Name:</h3>
            <input id="username_input" type="text">
        </div>

        <div class="input_field">
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
    document.getElementById("register_link").addEventListener("click", register_page);
    document.querySelector("button").addEventListener("click", login_or_reg);
    document.querySelector("#wrapper").classList.add("login_page")
}




async function get_dog(){
    let wrapper = document.querySelector("#wrapper");
    wrapper.classList.add("registration_info");
    let div = document.createElement("div");
    div.classList.add("info_div");
    div.style.height = "60px";
    wrapper.appendChild(div);
    div.textContent = "Getting a random dog";

    let image_div = document.querySelector("#dog_image");
    let img = document.createElement("img");
    img.classList.add("dog_image");
    
    let index = get_number(ALL_BREEDS.length);
    let random_dog = ALL_BREEDS[index].url;
    let dog_request = new Request(`https://dog.ceo/api/breed/${random_dog}/images/random`);
    let resource = await fetch_function(dog_request);
    div.remove();
    
    img.src = "media/logo.png";
    img.src = resource.message;

    image_div.appendChild(img);
    wrapper.classList.remove("registration_info");
    make_options(4, index);
}


function get_number(length){
    return Math.floor(Math.random() * length);
}

function make_options(number, dog_number){   
    for(let i = 0;i < number;i++){
        let options = document.querySelector("#options");
        let button = document.createElement("button");
        button.classList.add("option_button");
        button.setAttribute("id", `button_id_${i}`);
        options.appendChild(button);
    }
    let id_position = get_number(number);
        choices(id_position, dog_number);
}

function choices(number, dog){
    for(let i = 0;i < 4;i++){
        let index = get_number(ALL_BREEDS.length);
        let dog_name = ALL_BREEDS[index].name;
        console.log(dog_name);
        let button = document.querySelector(`#button_id_${i}`);
        button.textContent = dog_name;
        button.addEventListener("click", check_answer);
    }
    let correct_answer = document.querySelector(`#button_id_${number}`);
    correct_answer.setAttribute("id", "correct");
    correct_answer.textContent = ALL_BREEDS[dog].name;
}



function check_answer(event){
    document.querySelector("#wrapper").classList.add("registration_info");
    let div = document.createElement("div");
    div.classList.add("answer");
    document.querySelector("body").appendChild(div);

    
    if(event.target.id === "correct"){
        div.style.backgroundColor = "lime";
        div.textContent = "CORRECT!";
        
    }else{
        div.style.backgroundColor = "orange";
        div.textContent = "I'm afraid not..:(";
    }

    let button = document.createElement("button");
    button.textContent = "ONE MORE";
    button.classList.add("close_btn");
    div.append(button);
    
    button.addEventListener("click", new_question);
}


function new_question(event){
    let name = document.querySelector("#user_information > p").textContent;
    successful_login(name);
}