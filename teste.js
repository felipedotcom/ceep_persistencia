const tarefa = document.createElement('ul')
const li = document.createElement('li')
tarefa.classList.add('list')
li.classList.add('task')

	const conteudo = `
	<p class="content">${horario} * ${valor}</p>
	`

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

    return tarefa
    
div 
dentro dela tenho dois paragrafos
div

ul 
li 