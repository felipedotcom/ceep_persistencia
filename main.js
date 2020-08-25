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
	const concluida = false

	const dados = {
		valor, dataFormatada, horario, concluida
	}
	
	tarefas.push(dados)

	localStorage.setItem('tarefas', JSON.stringify(tarefas))

	input.value = " "


	carregarTarefas()
	
	
}

const criarData = (dia) => {
	const Dia = document.createElement('li') 
	
	const conteudo = `
			<p class="content-data"> ${dia.format('DD/MM/YYYY')}</p>
		`
	Dia.innerHTML = conteudo
	tarefas.forEach((tarefa, index) => {
		

		const dataFormatada = moment(tarefa.dataFormatada, 'YYYYDDMM')

		
		const diff = dia.diff(dataFormatada)

		if( diff === 0 ){ 
			
			Dia.appendChild(criarTarefa(tarefa, index))
		}
	}) 
	
	return Dia

	
	
}

const criarTarefa = ({ concluida, horario, valor}, id ) => {
	

	const tarefa = document.createElement('li')
	
	if( concluida ){
		tarefa.classList.add('done')
	}

	tarefa.classList.add('task')

	const conteudo = `
	<p class="content"> ${horario} * ${valor}</p>
	`

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui(carregarTarefas, id))
	tarefa.appendChild(BotaoDeleta(carregarTarefas, id))

	return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)


const carregarTarefas = () => {
	const arri = []
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

	tarefas.forEach(element => {
		if(arri.indexOf(element.dataFormatada) === -1){
			arri.push(element.dataFormatada)
		}
	})

	arri.forEach((data)=> {
		const dia = moment(data, 'YYYYDDMM')
		
		lista.appendChild(criarData(dia))

	}) 


}


/*  const push = ( horario ) => { 
	const showNotificacao = () => { 
		const notification = new Notification('Você tem uma nova mensagem', {
			body: 'fala cachorro'
		})

		return notification
	}
	
	if (Notification.permission === 'granted') {
		showNotificacao()
	} else if (Notification.permission !== 'denied') {
		Notification.requestPermission().then(permission => {
			if(permission === 'granted') {
				showNotificacao()
			}
		})
	}
} */
 

carregarTarefas()

