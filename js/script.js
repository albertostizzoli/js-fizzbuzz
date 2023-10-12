const wrapperEl = document.getElementById('boxWrapper');

//Ciclo

for (let i = 1; i < 101; i++) {

        let bgBox, text;
        //Condizioni
        // se il numero è divisibile per 3 e 5
        if (i % 3 === 0 && i % 5 === 0) {
            bgBox = 'odd2';
            text = `FizzBuzz`;
        }
        // se è divisibile per 3
        else if (i % 3 === 0) {
            bgBox = 'odd';
            text = `Fizz`;
        }
        // se è divisibile per 5
        else if (i % 5 === 0) {
            bgBox = 'even2';
            text =  `Buzz`;
         }
        // altrimenti
        else {
            bgBox = 'even';
            text = (i);
         }
        const boxEl = document.createElement('div');
        boxEl.className = ` box ${bgBox} d-flex justify-content-center align-items-center`;
        boxEl.innerText = text;
        wrapperEl.append(boxEl);

}


