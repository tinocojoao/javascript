
function contar(){
  var inicio = document.getElementById('inicio') // HTML
  var fim = document.getElementById('fim') // HTML
  var passo = document.getElementById('passo') // HTML


  var dadoInicio = Number(inicio.value) //DADO DO INPUT
  var dadoFim = Number(fim.value) //DADO DO INPUT
  var dadoPasso = Number(passo.value) //DADO DO INPUT

  var res = document.getElementById('res')

  if (dadoPasso <= 0){
    window.alert('Passo invalido! Considerando passo 1')
    dadoPasso = 1
  }
  if(inicio.value.length == 0 || fim.value.length == 0){
    res.innerHTML = `[ERRO] Impossivel contar! inicio ou fim não definidos`
    return
  }
  res.innerHTML = `Contando: <br>`
  if(dadoPasso != 0 && dadoInicio < dadoFim){
    for(var c = dadoInicio; c <= dadoFim; c += dadoPasso){
      res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1} `
     
  } else if(dadoPasso != 0 && dadoInicio > dadoFim){
      for(var c = dadoInicio; c >= dadoFim; c -= dadoPasso){
      res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += `\u{1F3C1} `
    }     
}	
   







