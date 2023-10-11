const wrapperEl = document.getElementById('boxWrapper');

//Ciclo

for(let i = 0; i <= 10; i++){
    for(let c = 0; c <= 10; c++){
        console.log(i);
        console.log(c);
        let bgBox;
        //Condizioni
        if(i % 5 > 0){
            bgBox ='even';
        } else{
            bgBox ='odd';
        } if (c % 5=== 0){
            bgBox = 'odd';
        } else{
            bgBox = 'even';
        }

        const boxEl = document.createElement('div');
        boxEl.className = ` box ${bgBox} d-flex justify-content-center align-items-center`;
        boxEl.innerHTML = c * i;
        wrapperEl.append(boxEl);

    }
}