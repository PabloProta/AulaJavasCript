const inputTarefas = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi()
{
    const li = document.createElement('li');
    return li;
}
function apagarTarefas(li)
{
    li.innerHTML +='  ';
    const botaoApagar  = document.createElement('button');
    botaoApagar.innerText = 'apagar';
      // botaoApagar.classList.add('botao-apagar');
    botaoApagar.setAttribute('class','apagar');
    li.appendChild(botaoApagar);
}
function salvarTarefas()
{
    const lista = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of lista)
    {
        let textoTarefa = tarefa.innerText;
       textoTarefa = textoTarefa.replace('apagar','').trim();
        listaTarefas.push(textoTarefa);
    }

    const tarefaJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas',tarefaJson);
    console.log(tarefaJson);
}
function addTarefas()
{
    const tarefas  = localStorage.getItem('tarefas');
    const list = JSON.parse(tarefas);
    for(let tarefa of list)
    {
        criaTarefa(tarefa);
    }

}
addTarefas();
function criaTarefa(textInput)
{
    const li = criaLi();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
    inputTarefas.value = '';
    inputTarefas.focus();
    salvarTarefas();
    apagarTarefas(li);
}
inputTarefas.addEventListener('keypress', function(e){
     
    if(e.keyCode === 13 && inputTarefas.value)
    {
        criaTarefa(inputTarefas.value);
    }
});
document.addEventListener('click', function(e){

        const el = e.target;

        if(el.classList.contains('btn-tarefa') && inputTarefas.value)
        {
            criaTarefa(inputTarefas.value);
        }
        if(el.classList.contains('apagar'))
        {
          
            el.parentElement.remove();
            salvarTarefas();
        }
});