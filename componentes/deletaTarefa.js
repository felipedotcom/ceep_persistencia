const BotaoDeleta = (atualizar, id) => { 
	const botaoDeleta = document.createElement('button')

	botaoDeleta.innerText = 'deletar'
	botaoDeleta.addEventListener('click', () => deletarTarefa(atualizar, id))

	return botaoDeleta
}

const deletarTarefa = (atualizar, id) => { 

	console.log(id)
	const index = id;

	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
	console.log(tarefasCadastradas)	
	tarefasCadastradas.splice(index, 1);

	localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
	atualizar()
	
}

export default BotaoDeleta