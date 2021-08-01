
let primeira_carta;
let segunda_carta;
let gifsExibir = [];
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
gifs.sort(comparador);
let cartasMarcadas = [];
let cliques = 0;
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
    const cartasDiv = document.querySelector(".cartas");
    for(let i =0; i < (qtdCartas/2); i++){
        gifsExibir.push(gifs[i]);
        gifsExibir.push(gifs[i]);
    }
    gifsExibir.sort(comparador);

   for(let i = 0; i < qtdCartas;i++){
   inserir = inserir  + `<div class="card" onClick="virarCarta(this)">
                        <div class="front-face face"><img src="css/img/front.png" class="fundo"></div>
                        <div class="back-face face"><img src="css/img/${gifsExibir[i]}" class="gif"></div>
                        </div>`
   }  
    
   cartasDiv.innerHTML = inserir;

}

function virarCarta(carta){
    cliques++;
    if(primeira_carta !== undefined && segunda_carta !== undefined){
        primeira_carta = undefined;
        segunda_carta = undefined;
        cartasMarcadas = [];
    }
    let gif = carta.querySelector(".gif");
    let stringGif = gif.getAttribute('src');
    cartasMarcadas.push(stringGif);
    if(primeira_carta == undefined){
        primeira_carta = carta;
        primeira_carta.classList.add("is-flipped");
    }
    else {
        segunda_carta = carta;
        segunda_carta.classList.add("is-flipped");
        if (cartasMarcadas.length === 2){
            if(verificarAcerto() == true){
                primeira_carta.classList.add("is-flipped");
                segunda_carta.classList.add("is-flipped");
                verificarVitoria();
            }
            else{
                setTimeout(function(){
                    primeira_carta.classList.remove("is-flipped");
                    segunda_carta.classList.remove("is-flipped");
                },1000);
            }
        }
    }

console.log(cartasMarcadas);
}


function verificarVitoria(){
    const cartas = document.querySelectorAll(".card");
    let acertos = 0;
    for(let i = 0;i < cartas.length;i++){
        if(cartas[i].classList.contains("is-flipped")){
            acertos++;
        }
    }
   if (acertos == cartas.length){
       setTimeout(function(){
        alert("Você Venceu !!!!!!!!");
       },1000);
   }

}


function verificarAcerto(){
    for(let i=0;i < cartasMarcadas.length;i++){
        if(cartasMarcadas[i] === cartasMarcadas[i+1]){
            return true;
        }
        else{
            return false;
        }
    }
}