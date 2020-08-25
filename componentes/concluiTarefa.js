const BotaoConclui = (atualizar, id) => { 
	const botaoConclui = document.createElement('button')  
	
	botaoConclui.classList.add('check-button')
	botaoConclui.innerText = 'concluir'

	botaoConclui.addEventListener('click', () => concluirTarefa(atualizar, id))

	return botaoConclui

}

const concluirTarefa = (atualizar,id) => {


	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))	
	tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida //variavel

	localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
	atualizar()

}

export default BotaoConclui

