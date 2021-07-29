let qtdCartas = 0;
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
gifs.sort(comparador);

liberarJogo();
inserirCartas();
function liberarJogo(){
    qtdCartas = Number(prompt("Com quantas cartas quer jogar?"));
    while(qtdCartas > 14 || qtdCartas < 4 || !qtdCartas || qtdCartas % 2 !== 0){
        qtdCartas =  Number(prompt("Com quantas cartas quer jogar?"));
    }

}

function comparador() { 
	return Math.random() - 0.5; 
}


function inserirCartas(){

    let inserir = "";
    let gifsExibir = [];
    const cartasDiv = document.querySelector(".cartas");
    for(let i =0; i < (qtdCartas/2); i++){
        gifsExibir.push(gifs[i]);
        gifsExibir.push(gifs[i]);
    }
    gifsExibir.sort(comparador);

   for(let i = 0; i < qtdCartas;i++){
   inserir = inserir  + `<div class="carta"><img src="css/img/${gifsExibir[i]}"></div>`
   }  
    
   cartasDiv.innerHTML = inserir;
}



