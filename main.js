//executa coisas maestrao
import {handleNovoItem } from './componentes/criaTarefa.js' 
import carregaTarefas from './componentes/carregaTarefa.js'


const novaTarefa = document.querySelector('[data-form]')

novaTarefa.addEventListener('submit', handleNovoItem)
/* 
carregaTarefas() */