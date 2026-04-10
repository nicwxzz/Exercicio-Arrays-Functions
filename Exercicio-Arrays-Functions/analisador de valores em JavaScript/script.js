let num = document.getElementById('fnum') // let = variaveis
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //o [] significa que foi criado um array vazio e que vai ser preenchido depois

function isNumero(n){
    if(Number(n) >= 1 && (Number(n) <= 100)){ //verifica se valor está entre 1 e 100
        return true //se o valor estiver entre 1 e 100 vai retornar verdadeiro
    } else{
        return false //senão, vai retornar falso
    }
}

function inLista(n, lis){
    if(lis.indexOf(Number(n)) != -1){ //verifica se o valor faz parte do array        
        return true //se o valor não faz parte do array vai retornar verdadeiro
    } else{
        return false // senão, vai retornar falso
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) { //analisa se foi digitado um número e se o valor já está na lista
        valores.push(Number(num.value)) // vai adicionar valores no array
        let item = document.createElement('option') //vai criar um elemento com a tag que está entre ''
        item.text = `Valor ${num.value} adicionado` 
        lista.appendChild(item) //serve para adcionar elementos no HTML
        res.innerHTML = ``
    }else { //o valor está inválido ou já está na lista
        alert('Valor inválido ou já encontrado na lista.') 
    }
    num.value = "" //deixa a caixa de texto vazia após adicionar um valor
    num.focus() //deixa o foco na caixa de texto
}

function finalizar(){
    if(valores.length == 0){ //verifica se array está vazio
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length //vai guardar a quantia de números cadastrados dentro do array na variável tot
        let maior = valores[0] //vai guardar na variável o primeiro número guardado no array
        let menor = valores[0] //vai guardar na variável o primeiro número guardado no array
        let soma = 0
        let media = 0
        for(let pos in valores) /*para cada posição em valores*/ {
            soma += valores[pos] //vai somar todos números cadastrados passando posição por posição
            if (valores[pos] > maior){
                maior = valores[pos] //passa o maior valor cadastrado para a variável maior
            } if (valores[pos] < menor){
                menor = valores[pos] //passa o menor valor cadastrado para a variável menor
            
        }
        }
        media = soma / tot //vai fazer a média
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, foram cadastrados ${tot} números.</p>`
        res.innerHTML += `<p> O maior valor cadastrado é ${maior}</p>`
        res.innerHTML += `<p> O menor valor cadastrado é ${menor}</p>`
        res.innerHTML += `<p> A soma dentre todos números cadastrados é ${soma}`
        res.innerHTML += `<p> A média dentre todos números cadastrados é ${media}`
    }
}