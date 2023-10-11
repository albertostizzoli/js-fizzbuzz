const wrapperEl = document.getElementById('boxWrapper');

//Ciclo

for (let i = 1; i <= 7; i++) {
    for (let c = 1; c <= 7; c++) {
        console.log(i);
        console.log(c);
        let bgBox;
        //Condizioni
        if (i % 3 > 0) {
            bgBox = 'even';
        } else {
            bgBox = 'odd';
        } if (c % 3 === 0) {
            bgBox = 'odd';
        } else {
            bgBox = 'even';
        }

        const boxEl = document.createElement('div');
        boxEl.className = ` box ${bgBox} d-flex justify-content-center align-items-center`;
        boxEl.innerHTML = c * i;
        wrapperEl.append(boxEl);
    }
}


