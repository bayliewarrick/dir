let button = document.getElementById('generate');
let profile = document.getElementById('profile')
let body = document.body

button.addEventListener('click', function() {
    button.innerHTML = 'generating doggo';
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data =>{
            profile.innerHTML = `<img src=${data.message}></img>`
            button.innerHTML = 'Generate Doggo'    
            body.setAttribute('style', `background-color:#${Math.floor(Math.random()*16777215).toString(16)}`)
    })
})