const enterInput = document.querySelector('.text-input');
const btn = document.querySelector('.bi-send');
const chatWindow = document.querySelector('.chat-window')
const geo = document.querySelector('.bi-geo-alt-fill')
const client = document.querySelector('#client-request');
const server = document.querySelector('#server-response');
const anima = document.querySelector('.lds-ripple');

function displayInputData(text, output) {
    let displayInput = document.createElement('div');
    displayInput.classList.add('client-request');
    displayInput.innerHTML = text;
    client.appendChild(displayInput)
}

function displayOutputData(text){
    let displayOutput = document.createElement('div');
    displayOutput.classList.add('server-response');
    displayOutput.innerHTML = text;
    client.appendChild(displayOutput)
}

btn.addEventListener('click', () => {
    let inputData = enterInput.value;
    enterInput.value = "";
    displayInputData(inputData);


    let socket = new WebSocket('wss://ws.postman-echo.com/raw')
    socket.onopen = (e) => {
        console.log('connected')
        socket.send(inputData)
    }

    socket.onmessage = (e) => {
        displayOutputData(`server's response: ${e.data}`);
    }

    socket.onerror = (e) => server.innerHTML = `en error occured`;
})

const error = () => {
    displayOutputData(`we are sorry, your geolocation is not defined`)
}

const success = async (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    displayOutputData(`Check your position <a target="_blank" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">here</a>`)

    if (latitude && longitude) {
        anima.style.display = 'none';
    }
}

geo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        displayOutputData("unfortunately, your browser doesn't support geolocation API")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
        anima.style.display = 'inline-block';
    }
})