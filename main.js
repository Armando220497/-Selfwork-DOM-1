
let button1 = document.querySelector('.bottone1');
let button2 = document.querySelector('.bottone2');
let button3 = document.querySelector('.bottone3');

let paragrafi = document.querySelectorAll('p');

// genera rgb casuale
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// cambia il colore del testo
button1.addEventListener('click', () => {
    paragrafi.forEach((p) => {
        let randomColor = getRandomRGB();
        p.style.color = randomColor;
    });
});

// cambia testo in grassetto e viceversa 
button2.addEventListener('click', () => {
    paragrafi.forEach((p) => {
        if (p.style.fontWeight === 'bold') {
            p.style.fontWeight = 'normal';
        } else {
            p.style.fontWeight = 'bold';
        }
    });
});

// far scomparire e riapparire i paragrafi
button3.addEventListener('click', () => {
    paragrafi.forEach((p) => {
        if (p.style.display === 'none') {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
});
