const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const anterior = document.getElementById('anterior')
const proximo = document.getElementById('proximo')
const capitulo = document.getElementById('capitulo')

const numeroCapitulos = 10
let taTocando = false
let capituloAtual = 1

// ================================== Play e Pause
function tocarFaixa(){
   audioCapitulo.play()
   taTocando = true
   botaoPlayPause.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill")
}

function pausarFaixa(){
   audioCapitulo.pause()
   taTocando = false
   botaoPlayPause.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill")
}

function tocarOuPausar(){
   if(taTocando == false){
      tocarFaixa()
   }
   else {
      pausarFaixa()
   }
}

function proximaFaixa(){
   if (capituloAtual >= 1 && capituloAtual <= 9){
      capituloAtual += 1
   } else {
      capituloAtual = 1
   }
   audioCapitulo.src = "books/dom-casmurro/" + `${capituloAtual}.mp3`
   capitulo.textContent = `Capítulo ${capituloAtual}`
   botaoPlayPause.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill")
   taTocando = false
}

function faixaAnterior(){
   if (capituloAtual >= 2 && capituloAtual <= 10){
      capituloAtual -= 1
   } else {
      capituloAtual = 10
   }
   audioCapitulo.src = "books/dom-casmurro/" + `${capituloAtual}.mp3`
   capitulo.textContent = `Capítulo ${capituloAtual}`
   botaoPlayPause.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill")
   taTocando = false
}

proximo.addEventListener('click',proximaFaixa)
anterior.addEventListener('click',faixaAnterior)

botaoPlayPause.addEventListener('click', tocarOuPausar)//botaoPlayPause.onclick(tocarOuPausar)


// ================================== Pular capitulo
