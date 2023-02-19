"use strict"

document.getElementById("register_link").addEventListener("click", register_page)



function register_page(event){
    let wrapper = document.querySelector("#wrapper")
    wrapper.classList.toggle("registration")

    if(wrapper.classList.contains("registration")){
    
    document.querySelector("h1").textContent = "Register"
    document.querySelector("p").textContent = "Ready when you are..."
    document.querySelector("p").classList.remove("login_failed")
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
        let div = document.createElement("div");
        show_feedback(div);

        let resource = await fetch_function(register_request)
        switch (resource.status) {
            case 418:
                div.textContent = "The server thinks it's not a teapot!"
                break;
            case 409:
                div.textContent = "Sorry that name is taken. Please try with another one"
            break;
            case 400:
                div.textContent = "Bad request"
                break;
            case 200: div.textContent = "Registration Complete. Please proceed to login"
            break;
        }
       
        let button = document.createElement("button")
        button.textContent = "CLOSE"
        button.classList.add("close_btn")
        div.appendChild(button)
        button.addEventListener("click", close_feedback)
       
        
        
    }

    if(event.target.textContent === "Login"){
        let div = document.createElement("div");
        show_feedback(div)
        let resource = await fetch_function(login_request);
        switch (resource.status) {
            case 200:
                
                break;
                case 418:
                    div.textContent = "The server thinks it's not a teapot!"
                    let button = document.createElement("button")
                    button.textContent = "CLOSE"
                    button.classList.add("close_btn")
                    div.appendChild(button)
                    button.addEventListener("click", close_feedback)
                break;
        
            default:
                document.querySelector("#wrapper").classList.remove("registration_info")
                let p = document.querySelector("p")
                p.classList.add("login_failed")
                p.textContent = "Wrong username or password."   
                div.remove()
                break;
        }
       
        
    }
    
}

async function fetch_function(request){
    let response = await fetch(request);
    let resource = await response.json();
        if(response.status !== 200){
            return response
        }
        return resource;
}

function show_feedback(div){
        let wrapper = document.querySelector("#wrapper");
        wrapper.classList.add("registration_info");

        div.classList.add("info_div");
        div.textContent = "Contacting server...";
        document.querySelector("body").appendChild(div);
}

function close_feedback(event){
    let div = document.querySelector(".info_div")
    div.remove()
    let wrapper = document.querySelector("#wrapper");
        wrapper.classList.remove("registration_info");
}

function button_function(button){
    let div = document.createElement("div");
    button.textContent = "CLOSE"
    button.classList.add("close_btn")
    div.appendChild(button)
    button.addEventListener("click", close_feedback)
}