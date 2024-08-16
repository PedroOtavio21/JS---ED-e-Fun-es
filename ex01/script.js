/*
Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os 
pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, 
para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), 
“Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do 
paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, 
caso contrário deve voltar ao menu.
*/

let fila = []
let opcao = ""

alert("Bem-vindo ao consultório de atendimento médico!")
do {
    let posicaoFila = ""

    for(let i = 0; i < fila.length; i++){
        posicaoFila += (i + 1) + "º " + fila[i] + "\n"
    }

    if(fila.length !== 0){
        opcao = prompt(
            `Pacientes presentes na fila de espera: \n${posicaoFila}
            Insira uma das opções abaixo:
            1. Novo paciente
            2. Consultar paciente
            3. Sair`
        )
    } else {
        opcao = prompt(
            `A fila do consultório se encontra vazia! Insira uma das opções abaixo: 
            1. Novo paciente
            2. Consultar paciente
            3. Sair`
        )
    }

    switch(opcao){
        case "1":
            // TODO: Adicionar paciente na fila
            const nomePaciente = prompt("Insira o nome do paciente que deseja consultar:")
            fila.push(nomePaciente)
            alert("Paciente entrou na fila do consultório com sucesso!")
            break
        case "2":
            // TODO: Remover paciente na primeira posição da fila
            if(fila.length !== 0){
                const pacienteRemovido = fila.shift()
                alert(`${pacienteRemovido} foi removido da fila com sucesso!`)
                break
            } else {
                alert("Não há pacientes para serem removidos na fila!")
                break
            }
        case "3":
            alert("Encerrando a aplicação.")
    }
} while(opcao !== "3")