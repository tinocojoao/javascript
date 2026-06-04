var horario = document.getElementById('horario')

var data = new Date() // função date
var hora = data.getHours() // qual informação quero da função

horario.innerHTML = (`Agora são ${hora} horas.`) // horario na tela
var res = document.getElementById('res') // container da img

var img = document.createElement('img') // criei uma tag img
img.setAttribute('id', 'foto') // uma id para a tag

function logica(){
    if(hora < 6){ 
        // BOA MADRUGADA
        document.body.style.backgroundColor = '#655b52'
        img.setAttribute('src', 'imagens/foto-madrugada.png')
        } else if(hora < 12){
        // BOM DIA
            document.body.style.backgroundColor = '#e2d9bc'
            img.setAttribute('src', 'imagens/foto-manha.png')
        } else if(hora < 18){
        // BOA TARDE
            document.body.style.backgroundColor = "#ca6e01"
            img.setAttribute('src', 'imagens/foto-tarde.png')
        } else{
        // BOA NOITE
            document.body.style.backgroundColor = '#0b111d'
            img.setAttribute('src', 'imagens/foto-noite.png')
        }
}

res.appendChild(img)