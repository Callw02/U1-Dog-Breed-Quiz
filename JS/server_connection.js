"use strict"

async function fetch_function(request){
    let response = await fetch(request);
    let resource = await response.json();
    console.log(resource);
        if(response.status !== 200){
            return response
        }
        return resource;
}