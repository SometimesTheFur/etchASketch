//constants

//variables
let pixels = 16;

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

        const rainbow = document.createElement('button');
            rainbow.classList.add('btn');
            rainbow.style.background = 'linear-gradient(to left, rgba(255, 0, 0, 0.26), rgba(255, 166, 0, 0.26), rgba(255, 255, 0, 0.26), rgba(0, 128, 0, 0.26), rgba(0, 0, 255, 0.26))';
            rainbow.textContent = "Rainbow"

        div2.appendChild(rainbow);

        const greyscale = document.createElement('button');
            greyscale.classList.add('btn');
            greyscale.style.marginTop = '20px';
            greyscale.style.background = 'rgba(90, 103, 116, 0.26)';
            greyscale.textContent = "Greyscale";
            greyscale.addEventListener('click', () => {
                pixel.style.Color = 'grey';
            });

        div2.appendChild(greyscale);

        const black = document.createElement('button');
            black.classList.add('btn');
            black.style.marginTop = '20px';
            black.style.background = 'rgba(90, 103, 116, 0.801)';
            black.textContent = "Black";

        div2.appendChild(black);

        const resize = document.createElement('button');
            resize.id = "resize";
            resize.classList.add('btn');
            resize.style.marginTop = '20px';
            resize.style.background = 'rgba(254, 254, 254, 0.25)';
            resize.textContent = "Resize";
        div2.appendChild(resize);
            resize.addEventListener('click', () => {
                //const grid = document.getElementById('gridbox');
                let pixelsInput = prompt("What size canvas? 16x16, 32x32, or 64x64?");
                if (pixelsInput === 16){
                    return pixels = 16;
                }else if(pixelsInput === 32) {
                    return pixels = 32;
                }else if(pixelsInput === 64){
                    return pixels = 64;
                }
            });



        const reset = document.createElement('button');
            reset.id = "reset";
            reset.classList.add('btn');
            reset.addEventListener('click', function(){
                location.reload();
            });
            reset.style.marginTop = '20px';
            reset.style.background = 'rgba(238, 238, 238, .75)';
            reset.textContent = "Reset";

        div2.appendChild(reset);

    container.appendChild(div2);

        const div3 = document.createElement('div');
            div3.id = "gridBox";
            div3.classList.add('div3');
                    const pixel = document.createElement('div');
                    pixel.classList.add('pixel');
                        const grid = document.getElementById('gridBox');
                        const pixelCpy = document.getElementsByClassName('pixel');
                        //const pixelClone = pixelCpy.cloneNode(false); 
                    setGrid = (pixels) => {
                        div3.style.gridTemplateColumns = "repeat('pixels', 1fr)";
                        div3.style.gridTemplateRows = "repeat('pixels', 1fr)";
                        for(i = 0; i < (pixels * pixels - 1); i++) {
                            console.log([i]);
                            div3.appendChild(pixel);
                            
                        }div3.appendChild(pixel);
                    };   
        div3.appendChild(pixel);
    container.appendChild(div3);

        const div4 = document.createElement('div');
            div4.id = "Footer";
            div4.classList.add('div4');

            const footer1 = document.createElement('p');
                footer1.classList.add('footer1');
                footer1.textContent = "SometimesTheFur 2020";

        
        div4.appendChild(footer1);

    container.appendChild(div4);

