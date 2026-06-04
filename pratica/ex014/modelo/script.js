function logica(){
    var msg = document.getElementById('msg')
    var res = document.getElementById('res') // CONTAINER DIV DA IMG
    var img = document.createElement('img') // CRIEI A TAG IMG MAS ELA N ESTA NO HTML AINDA
    img.setAttribute('id', 'foto') // DEFINO UMA ID PARA IMG
    var data = new Date() 
    var hora = data.getHours() 
    //hora =15
    msg.innerHTML = (`Agora são ${hora} horas.`) 

    if(hora < 6){ 
        // BOA MADRUGADA
        document.body.style.backgroundColor = '#655b52'
        img.src = 'imagens/foto-madrugada.png' // OPÇÃO MENOR
        } else if(hora < 12){
        // BOM DIA
            document.body.style.backgroundColor = '#e2d9bc'
            img.src = 'imagens/foto-manha.png'
        } else if(hora < 18){
        // BOA TARDE
            document.body.style.backgroundColor = "#ca6e01"
            img.setAttribute('src', 'imagens/foto-tarde.png') //OPÇÃO MAIOR
        } else{
        // BOA NOITE
            document.body.style.backgroundColor = '#0b111d'
            img.setAttribute('src', 'imagens/foto-noite.png')
        }
       res.appendChild(img) // COLOCA A IMAGEM NO HTML
}