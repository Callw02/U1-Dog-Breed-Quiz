"use strict"

document.getElementById("register_link").addEventListener("click", register_page)

function register_page(event){
    let wrapper = document.querySelector("#wrapper")
    wrapper.classList.toggle("registration")

    if(wrapper.classList.contains("registration")){
    document.querySelector("h1").textContent = "Register"
    document.querySelector("p").textContent = "Ready when you are..."
    document.querySelector("button").textContent = "Register"
    document.querySelector("#register_link p").textContent = "Already have an account? Go to login"
    }
    else{
        document.querySelector("h1").textContent = "Login"
        document.querySelector("p").textContent = "Let the magic start!"
        document.querySelector("button").textContent = "Login"
        document.querySelector("#register_link p").textContent = "New to this? Register For free"
    }        
}
    document.querySelector("button").addEventListener("click", login_or_reg)


async function login_or_reg(event){
    let user = document.querySelector("#username_input").value;
    let pass = document.querySelector("#password_input").value;

    let register_post = {
        action: "register",
        user_name: user,
        password: pass
        }

    const options = {
        method: `POST`,
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(register_post),
    }
   

    let register_request = new Request (`https://teaching.maumt.se/apis/access/`, options)
    let login_request = new Request (`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user}&password=${pass}`)
    
   
    if (event.target.textContent === "Register") {
        document.querySelector("#wrapper").classList.add("registration_info")
        fetch_function(register_request)
    }
    if(event.target.textContent === "Login"){
        fetch_function(login_request)
    }
}

async function fetch_function(request){
            let response = await fetch(request)
            let resource = await response.json()
            return resource    
}





