function adicionarMusic() {

var myMusicDoHtml = document.getElementById("linkMusic");
var myMusicInput = myMusicDoHtml.value;
var myMusicInputID = myMusicInput.substr(17) 



var linkMusicNaTela = document.getElementById("video");
var linkEmbedID = "https://www.youtube.com/embed/" + myMusicInputID
var linkIframe = '<iframe width="670" height="640" src="' +linkEmbedID+ '" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>'
var linkArtista = '<h1><font color="red"><b>Faixa Desconhecida</b></font><h1><h2><font color="white">Reproduzindo agora</font></h2>'
var linkFinal = linkIframe + linkArtista

console.log(linkFinal)

linkMusicNaTela.innerHTML = linkFinal


}











