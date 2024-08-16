/* 
Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas 
que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 
Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e 
adicioná-la no topo do baralho. 
Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar 
na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let opcao = ""
let cartas = []

do {
    if(cartas.length === 0){
        opcao = prompt(
            "Não há cartas até o momento no baralho. Insira uma das opções abaixo:" + 
            "\n1. Adicionar uma carta" + "\n2. Puxar uma carta" + "\n3. Sair"
        )
    } else {
        opcao = prompt(
            "Quantidade de cartas presentes no baralho: " + cartas.length  +
            "\nInsira uma das opções abaixo:" +  
            "\n1. Adicionar uma carta" + "\n2. Puxar uma carta" + "\n3. Sair" 
        )
    }

    switch(opcao){
        case "1":
            // TODO: Adicionar carta em pilha de cartas (começo ou final)
            const nomeCarta = prompt("Insira o nome da carta que deseja adicionar:")
            cartas.push(nomeCarta)
            alert(`${nomeCarta} foi adicionada com sucesso no baralho!`)
            break
        case "2":
            // TODO: Puxar uma cara da pilha de cartas do topo e mostrar no nome da carta
            if(cartas.length === 0){
                alert("Não há cartas para serem removidas do baralho!")
                break
            } else {
                const cartaRemovida = cartas.pop()
                alert(`A carta ${cartaRemovida} foi removida do topo do baralho com sucesso.`)
                break
            }
        case "3":
            alert("Saindo da aplicação ...")
            break
        default:
            alert("Opção inserida inválida!")
    }
} while(opcao !== "3")

// Teste de verificação
console.log("Cartas presentes no baralho:")
for(let carta of cartas){
    console.log(`${carta}`)
}