/*function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
    }

document.querySelector(".tecla_aplausos").onclick = tocaSomAplausos; */  

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;
}
