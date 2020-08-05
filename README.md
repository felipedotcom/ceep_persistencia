# ceep_persistencia

handleNovoItem 
 - selecionar data-form-date do calendario
 - pega o valor da data
 - cria um objeto que contem
    - valor do input
    - valor da data
  - lista.appendChild recebe a função criar tarefa
   que por parametro recebe o objeto dados, que contém valor e data
   - tarefas.push é o array vazio que recebe o objeto dados, que vai colocar dia e tarefa no array tarefas
   
  - localStorage.setItem - grava o item no localstorage, JSONstringfy para guardar como string pq temos um array e o localsotorage só aceita string
passamos uma chave e um valor

input value limpa o input

criarTarefa 
  - recebe um objeto como parametro que tem data e valor
  - cria li
  - add classe
  - criar template do paragrafo
  - conteudo do template vai para a tarefa
  - append dos botoes
  - retorno a tarefa
  
 carregarTarefas
  - parsear os valores que estão em string para array novamente
  - fazemos uma verificação se tarefasCadastradas for verdadeiro, tarefas recebe o array de tarefasCadastradas
  - loop para jogar as tarefas na tela, baseada no array de tarefas que está sendo armazenado no localhost
  - executa o carregar tarefas

componente deletaTarefas
  - const index = 1;

	- const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))	
	- tarefasCadastradas.splice(index, 1);
  - splice começa da posição 0 do array e vai até a posição 0 + 1
	- localStorage.setItem('tarefas',JSON.stringify(tarefasCadastradas)); 
  
  Tinha uma função só 
  separei as responsabilidade em 3
  

  
  
  
  
  
  
Tem o problema de ter uns códigos globais
