import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

const criarTarefa = ({horario, valor}) => {
	
	const tarefa = document.createElement('li')	
	tarefa.classList.add('task')
	
	const conteudo = `
	<p class="content">${horario} * ${valor}</p>
	`
	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

	return tarefa
}

export default criarTarefa