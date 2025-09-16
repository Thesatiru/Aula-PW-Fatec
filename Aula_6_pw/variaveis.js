//Variaveis
//var
//const (é possivel definir a variavel apenas um vez dentro de um bloco de código)
//let

var idade = 30
let nome = "Rafael"
const cidade = "São Paulo"

console.log(idade,nome,cidade)


// no var não é respeitado o escopo de um bloco de codigo
if(true){
    console.log("Linha 15 "+idade)
}
console.log("Linha 17 "+idade)

if(true){
    let idade = 26
    console.log("Linha 21 "+idade)
}
console.log("Linha 23 "+idade)