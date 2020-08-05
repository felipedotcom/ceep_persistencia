import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'


let tarefas = []
const lista = document.querySelector('[data-list]')

const handleNovoItem = (evento) => {

	evento.preventDefault()
	
	const input = document.querySelector('[data-form-input]')
	const valor = input.value
	const date = document.querySelector('[data-form-date]')
	const data = date.value
	const dataFormatada = moment(data).format('DD/MM/YYYY')
	
	const dados = {
		valor, dataFormatada
	}

	lista.appendChild(criarTarefa(dados))
	
	tarefas.push(dados)

	localStorage.setItem('tarefas', JSON.stringify(tarefas))
	
	input.value = " "
}

const criarTarefa = ({dataFormatada, valor}) => {

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


const carregarTarefas = () => {

	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))	

		
	if(tarefasCadastradas){
		tarefas = [...tarefasCadastradas]
	}

	tarefas.forEach(( tarefa ) => {
		lista.appendChild(criarTarefa(tarefa))
	})

}

carregarTarefas()
