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
}