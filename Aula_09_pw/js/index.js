function saudacao_externo(){
    alert('DELICIA')
    console.log('Arquivo index.js sendo chamado!')
}

document.getElementById('teste').addEventListener('click', 
    function (){
    alert('Olá mundo com listener')
})

document.getElementById('campo').addEventListener('keydown',
    function(event){
    console.log('tecla pressionada: '+ event.key)
})

document.getElementById('teste').addEventListener('mouseover',
    function(){
    console.log('Você está aqui?')
})

document.getElementById('campo').addEventListener('mouseout', 
    function(){
        console.log('Você passou por aqui')
    }
)