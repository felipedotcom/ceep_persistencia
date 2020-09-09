import { Tarefa } from './criaTarefa.js'

export const carregaTarefas = () => {
	const lista = document.querySelector('[data-list]')

	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) ||[]

	lista.innerHTML = ''  ///limpa o 

	tarefasCadastradas.forEach(( tarefa ) => {
		lista.appendChild(Tarefa(tarefa))
	})
}



export default carregaTarefas