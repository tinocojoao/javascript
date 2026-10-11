const num = document.getElementById('numero')
const sel = document.getElementById('lista')
const res = document.getElementById('res')

let tot = []
let maiorValor = 0
let soma = 0

function atualizarMaior(n) {
    if (n > maiorValor) {
        maiorValor = n      
    }
}

function atualizarSoma(n) {
    soma += n              
}

function adicionar() {
    let n = Number(num.value)  

    if (num.value.length == 0) {
        window.alert('[ERRO] Nenhum número foi identificado')
    } else if (n < 1 || n > 100) {
        window.alert('[ERRO] Número inválido')
    } else if (tot.indexOf(n) !== -1) {
        window.alert('[ERRO] Este número já foi adicionado')
    } else {
        res.innerHTML = ''
        tot.push(n)
        atualizarMaior(n)
        atualizarSoma(n)

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        sel.appendChild(item)
    }

    num.value = ''
    num.focus()
}

function info() {
    tot.sort()
    if(tot.length == 0){
        window.alert('Adicione números para finalizar')
    } else {
    let media = soma / tot.length
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${tot[0]} </p> `
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}