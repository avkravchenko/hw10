const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (window.screen){
        const height = window.screen.height;
        const width = window.screen.width;
        alert(`the size of your sceen is ${width}x${height}px`);
    } else {
        alert('your browser don\'t support a screen API');
    }
})