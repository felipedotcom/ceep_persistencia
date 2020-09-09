/* import BotaoConclui from '../componentes/concluiTarefa.js'
import BotaoDeleta from '../componentes/deletaTarefa.js'
import carregaTarefas from './carregaTarefa.js'


export const handleNovoItem = (evento) => {

	evento.preventDefault()
	const tarefas = JSON.parse(localStorage.getItem('tarefas')) ||[] */

	/* pq o array nao esta incializado no localstorage a gente nao fez setItem ainda  nao tem nada ele retorna null, poderiamos fazer verificac	ao com um if
	ou entao chamar um array vazio || tarefas vira array vazio*/
/* 
	se o localstorage tiver vazio manda um array vazio */

/* 
	const input = document.querySelector('[data-form-input]')
	const valor = input.value
	const calendario = document.querySelector('[data-form-date]')
	const data = moment(calendario.value)

	const dataFormatada = data.format('DD/MM/YYYY')

	const dados = {
		valor, dataFormatada
    }

	const tarefasAtualizadas = [...tarefas, dados] 
	

	localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

	input.value = " "

	carregaTarefas()
 
}

export const Tarefa = ({ dataFormatada, valor }) => {

	const tarefa = document.createElement('li')
	tarefa.classList.add('task')


	const conteudo = `<p class="content">${dataFormatada} ${valor}</p>
	`

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

	return tarefa
}
 */

import BotaoConclui from '../componentes/concluiTarefa.js'
import BotaoDeleta from '../componentes/deletaTarefa.js'



const lista = document.querySelector('[data-list]')

export const handleNovoItem = (evento) => {

	evento.preventDefault()
	const tarefas = JSON.parse(localStorage.getItem('tarefas')) ||[]

	
	const input = document.querySelector('[data-form-input]')
	const valor = input.value
	const calendario = document.querySelector('[data-form-date]')
	const data = moment(calendario.value)
	
	const dataFormatada = data.format('DD/MM/YYYY')

	const dados = {
		valor, dataFormatada
	}
	
	/* const tarefasAtualizadas = [...tarefas, dados]  */
	lista.appendChild(Tarefa(dados))

	/* tarefas.push(dados) */

	localStorage.setItem('tarefas', JSON.stringify(tarefas))

	input.value = " " 
}

export const Tarefa = ({ dataFormatada, valor }) => {

	const tarefa = document.createElement('li')
	tarefa.classList.add('task')


	const conteudo = `<p class="content">${dataFormatada} ${valor}</p>
	`

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())
	tarefa.appendChild(BotaoDeleta())

	return tarefa
}
