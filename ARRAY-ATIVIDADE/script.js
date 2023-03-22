
// declarando as variaveis bem cis 
var campo = document.querySelector("input")
var btn = document.querySelector("button")
var btn2 = document.getElementById('btn2')
var objetos = ['cadeira', 'impressora', 'garfo'];

// função para Adicionar os objetos
   btn.onclick = function(){

    if(document.getElementById('objeto').value === ''){
    alert('Informe um valor válido')
    }
    else if(objetos.indexOf(campo.value) !== -1){ 
        alert('Objeto já existe')
    }else {
        objetos.push(campo.value);
        console.log(objetos);
    }

    


}
//função para ordem alfabetica
     btn2.onclick = function (){
        console.log(objetos.sort())
    }
    