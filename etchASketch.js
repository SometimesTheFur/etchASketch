//Creating parent divs and butttons in the Container.
const container = document.querySelector('div');
    container.classList.add('container');

    const div1 = document.createElement('div');
        div1.id = "Header"
        div1.classList.add('div1');
    
        const title = document.createElement('p');
            title.classList.add('title');
            title.textContent = "H👾VER DOODLE";
    div1.appendChild(title);
container.appendChild(div1);

    const div2 = document.createElement('div');
        div2.id = "buttonBox";
        div2.classList.add('div2');

        const rulesTop = document.createElement('p');
            rulesTop.classList.add('rulesTop');
            rulesTop.textContent = "Click an option below";
    div2.appendChild(rulesTop);

        const rainbowBtn = document.createElement('button');
            rainbowBtn.classList.add('btn');
            rainbowBtn.style.background = 'linear-gradient(to left, rgba(255, 0, 0, 0.26), rgba(255, 166, 0, 0.26), rgba(255, 255, 0, 0.26), rgba(0, 128, 0, 0.26), rgba(0, 0, 255, 0.26))';
            rainbowBtn.textContent = "Rainbow";
            rainbowBtn.addEventListener('click', rainbowGrid);
            function rainbowGrid() {
                changeColor('rainbow');
            }
    div2.appendChild(rainbowBtn);

        const greyscaleBtn = document.createElement('button');
            //greyscaleBtn.id = 'greyscale'
            greyscaleBtn.classList.add('btn', 'greyscale');
            greyscaleBtn.style.marginTop = '20px';
            greyscaleBtn.style.background = 'rgba(90, 103, 116, 0.26)';
            greyscaleBtn.textContent = "Greyscale";
            greyscaleBtn.addEventListener('click', greyGrid);
            function greyGrid() {
                changeColor('greyscale');
            }
    div2.appendChild(greyscaleBtn);

        const blackBtn = document.createElement('button');
            blackBtn.classList.add('btn');
            blackBtn.style.marginTop = '20px';
            blackBtn.style.background = 'rgba(90, 103, 116, 0.801)';
            blackBtn.textContent = "Black";
            blackBtn.addEventListener('click', blackGrid);
            function blackGrid() {
                changeColor('black')
            }
    div2.appendChild(blackBtn);

        const resize = document.createElement('button');
            resize.id = "resize";
            resize.classList.add('btn');
            resize.style.marginTop = '20px';
            resize.style.background = 'rgba(254, 254, 254, 0.25)';
            resize.textContent = "Resize";
    div2.appendChild(resize);

        const reset = document.createElement('button');
            reset.id = "reset";
            reset.classList.add('btn');
            reset.style.marginTop = '20px';
            reset.style.background = 'rgba(238, 238, 238, .75)';
            reset.textContent = "Reset";
            reset.addEventListener('click', () => {location.reload()});
    div2.appendChild(reset);
container.appendChild(div2);

        const div3 = document.createElement('div');
            div3.id = "gridBox";
            div3.classList.add('div3');
            const grid = document.getElementById('gridBox');
            const pixel = document.createElement('div');
                pixel.classList.add('pixel');
//To create the initial grid
        let pixels = 16;
            for(i = 0; i < (pixels * pixels); i++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixel');
                div3.appendChild(pixel);   
            }
container.appendChild(div3);

        const div4 = document.createElement('div');
        div4.id = "Footer";
        div4.classList.add('div4');

        const footer1 = document.createElement('p');
            footer1.classList.add('footer1');
            footer1.textContent = "SometimesTheFur 2020";
    div4.appendChild(footer1);
container.appendChild(div4);

//Functions
resize.addEventListener('click', function() {
    let newPixels = prompt("What size canvas? 16x16, 32x32, 64x64?  ~Note: Over 100x100 will have some lag.", 16);
        setGrid(newPixels);
    });
function setGrid(newPixels = 16) {
    div3.innerHTML = '';
    div3.style.gridTemplateRows = `repeat(${newPixels}, 1fr)`;
    div3.style.gridTemplateColumns = `repeat(${newPixels}, 1fr)`;
    
    for(i = 0; i < (newPixels * newPixels); i++) {
        console.log([i]);
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        div3.appendChild(pixel);
    };
}
function changeColor(color){
    const divs = document.querySelectorAll('.pixel');

    switch (color) {
        case 'black':
            divs.forEach(pixel => pixel.removeEventListener('mouseover', rainbowPixel));
            divs.forEach(pixel => pixel.removeEventListener('mouseover', greyPixel));
            divs.forEach(pixel => pixel.addEventListener('mouseover', blackPixel));
            break;
        case 'greyscale':
            divs.forEach(pixel => pixel.removeEventListener('mouseover', blackPixel));
            divs.forEach(pixel => pixel.removeEventListener('mouseover', rainbowPixel));
            divs.forEach(pixel => pixel.addEventListener('mouseover', greyPixel));
            break;
        case 'rainbow':
            divs.forEach(pixel => pixel.removeEventListener('mouseover', blackPixel));
            divs.forEach(pixel => pixel.removeEventListener('mouseover', greyPixel));
            divs.forEach(pixel => pixel.addEventListener('mouseover', rainbowPixel));
            break;
    }
}
function blackPixel(e) {
    e.target.classList.remove('greyscale');
    e.target.style.backgroundColor = 'rgb(0, 0, 0)';
    e.target.style.border = 'none';
}
function greyPixel(e) {
    if (!e.target.classList.contains('greyscale')) {
        e.target.style.backgroundColor = darkenColor('rgb(255, 255, 255)');
        e.target.classList.add('greyscale');
    }
    e.target.style.border = 'none';
}
function rainbowPixel(e) {
    e.target.classList.remove('greyscale');
    e.target.style.backgroundColor =
        `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    e.target.style.border = 'none';
}
let color = 'rgb(255, 255, 255)';
function darkenColor(color) {
    const colorValues = color.slice(4, color.Length - 1).split(', ');
    
    let amt = Math.round(2.55 * 10);

    let R = colorValues[0] - amt;
    let G = colorValues[1] - amt;
    let B = colorValues[2] - amt;

    console.log(`rgb(${R}, ${G}, ${B})`);
}
