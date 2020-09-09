const datasUnicas = removeDatasRepetidas(tarefas)
	datasUnicas.forEach((data)=> {
		const dia = moment(data, 'YYYYDDMM')
		lista.appendChild(criarData(dia))
	}) 