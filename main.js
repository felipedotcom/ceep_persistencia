import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'



const lista = document.querySelector('[data-list]')

const handleNovoItem = (evento) => {

	evento.preventDefault()

	const input = document.querySelector('[data-form-input]')
	const valor = input.value
	const calendario = document.querySelector('[data-form-date]')
	const data = moment(calendario.value)

	const dataFormatada = data.format('DD/MM/YYYY')

	const dados = {
		valor, dataFormatada
	}

	lista.appendChild(criarTarefa(dados))

	

	localStorage.setItem('tarefas', JSON.stringify(dados))


	input.value = " "
}

const criarTarefa = ({ dataFormatada, valor }) => {

	const tarefa = document.createElement('li')
	tarefa.classList.add('task')


	const conteudo = `<p class="content">${dataFormatada} ${valor}</p>
	`

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

	return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)
