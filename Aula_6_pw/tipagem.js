let idade = 30//int
let nome = "Rafael"//String
let cidade = 'São Paulo'//String
let altura = 1.80//Double
let v = true//boolean
let f = false//boolean

console.log(typeof(idade)+": "+idade)
console.log(typeof(nome)+": "+nome)
console.log(typeof(cidade)+": "+cidade)
console.log(typeof(altura)+": "+altura)
console.log(typeof(v)+": "+v)
console.log(typeof(f)+": "+f)

let vazio = null
let indef

console.log(typeof(vazio)+": "+vazio)
console.log(typeof(indef)+": "+indef)

let aluno = {
    nome: 'Rafael',
    curso: 'ADS',
    faculdade: 'Fatec Ferraz de Vasconcelos'
}

let aluno_2 = {
    nome: 'Fernando',
    curso: 'ADS',
    faculdade: 'Fatec Ferraz de Vasconcelos',
    endereco: {
        rua: 'Rua ABC',
        cidade: 'Ferraz de Vasconcelos',
        bairros: 'Jardim Guainases'
    }
}

console.log(aluno)
console.log(aluno_2)

let cores = ['Azul', 'Amarelo','Vermelho','Roxo','Preto','Branco']

console.log(cores)

let res = 0
let v1 = 30
let v2 = 30


res = v1 - v2
console.log(res)
res = v1 + v2
console.log(res)
res = v1 * v2
console.log(res)
res = v1 / v2
console.log(res)

res= v2<v1
console.log(res)

res = v2==v1
console.log(res)

res = v2!=v1
console.log(res)


