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
            rulesTop.textContent = "Rules"
        div2.appendChild(rulesTop);

        const rulesBody = document.createElement('ul');
            rulesBody.classList.add('rulesBody');
            rulesBody.style.alignContent = 'center';
            rulesBody.style.justifyContent;
            
            const r1 = document.createTextNode("Test" + " Hello");
            div2.appendChild(r1);

        div2.appendChild(rulesBody);

    container.appendChild(div2);

