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
	const horario = data.format('HH:mm')

	const dados = {
		valor, dataFormatada, horario
	}
	
	tarefas.push(dados)

	localStorage.setItem('tarefas', JSON.stringify(tarefas))

	input.value = " "

	/* const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) */


	carregarTarefas()
	
}

const criarData = (dia) => {
	const Dia = document.createElement('li') 
	
	Dia.innerHTML = dia.format('DD/MM/YYYY')

	tarefas.forEach((tarefa) => {
		const dataFormatada = moment(tarefa.dataFormatada, 'YYYYDDMM')
		const diff = dia.diff(dataFormatada)

		if( diff === 0 ){ 
		
			Dia.appendChild(criarTarefa(tarefa))
		}
	}) 
	
	return Dia
	
}

const criarTarefa = ({ dataFormatada, horario, valor }) => {
	

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

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)


const carregarTarefas = () => {
	
	lista.innerHTML = ''
	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))


	if (tarefasCadastradas) {
		tarefas = [...tarefasCadastradas]
	}

	tarefas.sort((a, b) => {
		const dataA = moment(a.dataFormatada, 'YYYYDDMM')
		const dataB = moment(b.dataFormatada, 'YYYYDDMM')
		return dataA.diff(dataB)
	})

 	const datas = tarefas.map((item) => {
		return item.dataFormatada
	})


	datas.forEach((data)=> {
		const dia = moment(data, 'YYYYDDMM')
		
		lista.appendChild(criarData(dia))

	}) 


}
carregarTarefas()
/* datas com array vazio
push no outro array
se nao adidciona   */