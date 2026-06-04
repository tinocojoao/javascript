
 function contar(){
 var inicio = document.getElementById('inicio') // HTML
 var fim = document.getElementById('fim') // HTML
 var passo = document.getElementById('passo') // HTML


 var dadoInicio = Number(inicio.value) //DADO DO INPUT
 var dadoFim = Number(fim.value) //DADO DO INPUT
 var dadoPasso = Number(passo.value) //DADO DO INPUT

 var res = document.getElementById('res')

 for(var c = dadoInicio; c <= dadoFim; c += dadoPasso){
    res.innerHTML += `${c} - `
 }
}





