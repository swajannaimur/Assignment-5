

document.getElementById('random-color').addEventListener('click', function randomColor() {
    let letters = '0123456789ABCDEFGHIJ'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    return color;

    
})
