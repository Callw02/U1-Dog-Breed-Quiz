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



