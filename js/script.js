let qtdCartas = 0;
liberarJogo();
function liberarJogo(){
    qtdCartas = Number(prompt("Com quantas cartas quer jogar?"));
    while(qtdCartas > 14 || qtdCartas < 4 || !qtdCartas){
        qtdCartas =  Number(prompt("Com quantas cartas quer jogar?"));
    }

}
