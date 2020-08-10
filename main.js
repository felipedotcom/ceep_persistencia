import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'


let tarefas = []
const lista = document.querySelector('[data-list]')

const handleNovoItem = (evento) => {

	evento.preventDefault()
	
	const input = document.querySelector('[data-form-input]')
	const valor = input.value
	const date = document.querySelector('[data-form-date]')
	const data = moment(date.value)
	const dataFormatada = data.format('YYYYDDMM')

	const dados = {
		valor, dataFormatada
	}

	tarefas.push(dados)

	localStorage.setItem('tarefas', JSON.stringify(tarefas))
	
	input.value = " "

	carregarTarefas()
}

const criarTarefa = ({dataFormatada, valor}) => {
	const data = moment(dataFormatada, 'YYYYDDMM').format('DD/MM/YYYY')

	const tarefa = document.createElement('li')	
	tarefa.classList.add('task')
	

	const conteudo = `
	<p class="content">${data} * ${valor}</p>

	`
	
	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

	return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)


const carregarTarefas = () => {
	lista.innerHTML = ''
	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))	

		
	if(tarefasCadastradas){
		tarefas = [...tarefasCadastradas]
	}

/* 	tarefas.sort((a, b) => (a.dataFormatada) - (b.dataFormatada));
 */
	 tarefas.sort((a, b) => {
		const dataA = moment(a.dataFormatada, 'YYYYMMDD')
		const dataB = moment(b.dataFormatada, 'YYYYMMDD')
		return dataA.diff(dataB)
	 })

	tarefas.forEach(( tarefa ) => {
		lista.appendChild(criarTarefa(tarefa))
	})

}
carregarTarefas()
