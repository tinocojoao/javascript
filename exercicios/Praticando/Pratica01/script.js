function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    //hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        // BOM DIA!
        document.body.style.background = '#e2d9bc'
        img.src = 'imagens/foto-manha.png'
    } else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        document.body.style.background = '#f19801'
        img.src = 'imagens/foto-tarde.png'
    } else {
        // BOA NOITE!
        document.body.style.background = '#1c3b5c'
        img.src = 'imagens/foto-noite.png'
    }
}
