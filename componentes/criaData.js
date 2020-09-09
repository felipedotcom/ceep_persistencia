
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

	
	