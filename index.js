let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
});

// let text = document.getElementById('text');
// let moon = document.querySelector('img[alt="moon"]');
// let mountain = document.querySelector('img[alt="mountain"]');
// let road = document.querySelector('img[alt="road"]');
// let bg = document.querySelector('img[alt="bg"]');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 1.5 + 'px';
//     moon.style.top = value * 1 + 'px';
//     mountain.style.top = value * 0.5 + 'px';
//     road.style.top = value * 0.5 + 'px';
//     bg.style.top = value * 0.25 + 'px';
// });
