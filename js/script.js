const wrapperEl = document.getElementById('boxWrapper');

//Ciclo

for (let i = 1; i <= 10; i++) {
    for (let c = 1; c <= 10; c++) {
        console.log(i);
        console.log(c);
        let bgBox;
        //Condizioni
        // se il numero è divisibile per 3 e 5
        if (i % 3 === 0 && i % 5 === 0) {
            bgBox = 'even';
        }
        // se è divisibile per 3
        else if (i % 3 === 0) {
            bgBox = 'odd';
        }
        // se è divisibile per 5
        else if (i % 5 === 0) {
            bgBox = 'odd';
         }
        // altrimenti
        else {
            bgBox = 'even';
         }

        const boxEl = document.createElement('div');
        boxEl.className = ` box ${bgBox} d-flex justify-content-center align-items-center`;
        boxEl.innerHTML = c * i;
        wrapperEl.append(boxEl);
    }
}

/*if (i % 3 > 0) {
    bgBox = 'even';
} else {
    bgBox = 'odd';
} if (c % 3 === 0) {
    bgBox = 'odd';
} else {
    bgBox = 'even';
}*/