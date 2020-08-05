const BotaoDeleta = () => { 
	const botaoDeleta = document.createElement('button')

	botaoDeleta.innerText = 'deletar'
	botaoDeleta.addEventListener('click', deletarTarefa)

	return botaoDeleta
}

const deletarTarefa = (evento,) => { 
	const botaoDeleta = evento.target
	
	const tarefaCompleta = botaoDeleta.parentElement

	tarefaCompleta.remove()
	const index = 0;

	const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))	
	tarefasCadastradas.splice(index, index + 1);

	localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

	

/* 	tarefasCadastradas.slice((indice, 1));
 */
	/* console.log(tarefasCadastradas)

	localStorage.removeItem(tarefasCadastradas[0]) */

	/* const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

	var indexToRemove = 1;

    tarefasCadastradas.slice(indexToRemove, 1); */
/* 
	localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));  */


	return botaoDeleta

}

export default BotaoDeleta