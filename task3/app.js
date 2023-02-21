const enterInput = document.querySelector('.text-input');
const btn = document.querySelector('.bi');
const client = document.querySelector('.client-request');
const server = document.querySelector('.server-response');


btn.addEventListener('click', () => {
    let inputData = enterInput.value;
    console.log(inputData);
    enterInput.value = "";
    client.classList.add('active');
    client.innerHTML = inputData;


    let socket = new WebSocket('wss://ws.postman-echo.com/raw')
    socket.onopen = (e) => {
        console.log('connected')
        socket.send(inputData)
    }

    socket.onmessage = (e) => {
        server.classList.add('active');
        server.innerHTML = `server's response: ${e.data}`
    }

    socket.onerror = (e) => server.innerHTML = `en error occured`;
})

