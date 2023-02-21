const btn = document.querySelector('.btn');
const firstSvg = document.querySelector('.svg1');
const secondSvg = document.querySelector('.svg2');

btn.addEventListener('click', () => {
    firstSvg.classList.toggle('hide');
    secondSvg.classList.toggle('active');

})