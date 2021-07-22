document.body.addEventListener('keyup', (event) => {
   //console.log(event.code.toLowerCase()); //Code = Qual a tecla que foi selecionada.

   playSound(event.code.toLowerCase());
});

//Seleciona como se seleciona no CSS
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    console.log("Música", song);

    if(song !== ''){
        // Método split divide um objeto do tipo string em um array de strings. 
        // Sintaxe - split(separador, limite)
        let songArray = song.split('');

        //console.log(songArray);

        playComposition(songArray);
    }

});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        // currentTime vai retornar o audio para o 0
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        // Add Adiciona a classe 'x' do elemento escolhido
        keyElement.classList.add('active');

        // setTimeout faz um tempo de espera em milisegundos
        // Remove remove a classe 'x' do elemento escolhido
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray){
    //Essa função seria executada de uma vez só, fazendo apenas um som e não melodia. Por esse motivo foi criado o wait, pois ele será utilizado no setTimeout com acrescimos a cada vez que passa no for, fazendo então que o som seja executado separadamente
    let wait = 0;
    
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250;
    }
}