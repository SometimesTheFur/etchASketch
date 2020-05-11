const container = document.querySelector('#container');
    container.style.placeContent = 'center';
    container.classList.add('container');


    const div1 = document.createElement('div');
        div1.classList.add('div1');
    
        const title = document.createElement('p');
            title.classList.add('title');
            title.style.alignContent = 'center';
            title.style.justifyContent = 'center';
            title.textContent = "Etch A Sketch";
        div1.appendChild(title);
    
    container.appendChild(div1);

    const div2 = document.createElement('div');
        div2.classList.add('div2');

        const rulesTop = document.createElement('p');
            rulesTop.classList.add('rulesTop');
            rulesTop.style.alignContent = 'center';
            rulesTop.style.justifyContent = 'center';
            rulesTop.textContent = "Click an option below"
        div2.appendChild(rulesTop);

        const btn1 = document.createElement('button');
            btn1.classList.add('btn');
            btn1.style.background = 'linear-gradient(to left, rgba(255, 0, 0, 0.26), rgba(255, 166, 0, 0.26), rgba(255, 255, 0, 0.26), rgba(0, 128, 0, 0.26), rgba(0, 0, 255, 0.26))';
            btn1.textContent = "Rainbow"

        div2.appendChild(btn1);



    container.appendChild(div2);

    const div3 = document.createElement('div');
        div3.classList.add('div3');
    
    container.appendChild(div3);

