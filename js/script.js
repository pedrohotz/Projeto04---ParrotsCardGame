let qtdCartas = 0;
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
let gifsDuplicados = duplicarArray();
let gifsEmbaralhados = gifsDuplicados.sort(comparador);
liberarJogo();
inserirCartas();
function liberarJogo(){
    qtdCartas = Number(prompt("Com quantas cartas quer jogar?"));
    while(qtdCartas > 14 || qtdCartas < 4 || !qtdCartas || qtdCartas % 2 !== 0){
        qtdCartas =  Number(prompt("Com quantas cartas quer jogar?"));
    }

}

function duplicarArray(){
    let gifsDuplicated = [];
    for(let i =0; i < gifs.length;i++){
        gifsDuplicated[i] = gifs[i] 
    }
    let gifsConcat = gifs.concat(gifsDuplicated);
    return gifsConcat;
}
function comparador() { 
	return Math.random() - 0.5; 
}

function inserirCartas(){
    let inserir = "";
    const cartasDiv = document.querySelector(".cartas");
    console.log(cartasDiv);
    for(let i = 0; i < qtdCartas;i++){
    inserir = inserir  + `<div class="carta"><img src="css/img/${gifsEmbaralhados[i]}"></div>`
    }   
    cartasDiv.innerHTML = inserir;
}



