function ola(){
    console.log('Olá mundo em JS')
}

ola()

function soma(v1,v2){
    let res = v1+v2;
    console.log(res)
}

soma()

function subtracao(v1=10,v2){
    let res = v1-v2;
    console.log(res)
}

subtracao()

function multiplicacao (v1,v2){
    return v1*v2
}

let divisao = function(v1,v2){
    return v1/v2
}

let maior = (v1,v2) => {
    return v1 > v2
 }

console.log(maior(10,10))
console.log(divisao(10,5))
console.log(multiplicacao(20,2))