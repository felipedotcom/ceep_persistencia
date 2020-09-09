removeDatasRepetidas
tarefas.forEach(element => {
    if(arri.indexOf(element.dataFormatada) === -1){
        arri.push(element.dataFormatada)
    }
})

export const datasUnicas = removeDatasRepetidas(tarefas)

	datasUnicas.forEach((data)=> {
		const dia = moment(data, 'YYYYDDMM')
		lista.appendChild(criarData(dia))
    }) 

export const ordenaDatas
tarefas.sort((a, b) => { //ordenaDatas
    const dataA = moment(a.dataFormatada, 'YYYYDDMM')
    const dataB = moment(b.dataFormatada, 'YYYYDDMM')
    return dataA.diff(dataB)
})

chama dentro do carregarTarefas