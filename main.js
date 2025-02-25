function playSound(id){
    document.querySelector(id).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let i=0; i < listaDeTeclas.length;i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        playSound(idAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
