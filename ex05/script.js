/*
Sistema de Vagas de Emprego
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar 
as vagas e adicionar candidatos às vagas. 
Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema 
- Listar vagas disponíveis
- Criar um nova vaga
- Visualizar uma vaga
- Inscrever um candidato em uma vaga
- Excluir uma vaga
- Sair

1. A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos 
de todas as vagas.

2. A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, 
e também deve pedir que o usuário confirme as informações antes de salvá-las.

3. A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: 
índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

4. A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e 
então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

5. A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o 
usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos 
até agora sempre que possível, como os objetos, arrays e funções.
*/

let vagas = []

function listarVagas(){
    if(vagas.length === 0){
        alert("Sem vagas para realizar a listagem. Crie uma vaga para começar")
    } else {
        const vagasEmTexto = vagas.reduce((texto, vaga, indice) => {
            texto += indice + ". " + vaga.nome + " (" + vaga.candidatos.length + " candidatos)\n"
            return texto
        }, "")

        alert(vagasEmTexto)
    }
}

function criarVaga(){
    const nome = prompt("Insira o nome da vaga:")
    const descricao = prompt("Insira a descrição da vaga desejada:")
    const data = prompt("Insira a data limite disponínel na vaga (dd/mm/aaaa)")

    const confirma = confirm(
        "Deseja salvar a seguinte vaga?" + 
        "\nNome da Vaga: " + nome + 
        "\nDescrição: " + descricao + 
        "\nData Limite: " + data
    )

    if(confirma){
        const vaga = {nome, descricao, data, candidatos: []}
        vagas.push(vaga)
        alert("A vaga inserida foi salva com sucesso!")
    } else {
        alert("A inscrição da vaga foi encerrada!")
    }
}

function visualizarVaga(){
    const indice = prompt("Insira o indice da vaga que deseja visualizar:")

    if(vagas[indice] === undefined){
        alert("A vaga que você procura não existe.")
    } else {
        candidatosEmTexto = vagas[indice].candidatos.reduce((texto, candidato) => {
            texto += "\n - " + candidato
            return texto
        }, "")

        alert(
            "Vaga Nº" + indice + 
            "\nNome da vaga: " + vagas[indice].nome +
            "\nDescrição: " + vagas[indice].descricao + 
            "\nData limite: " + vagas[indice].data + 
            "\nQuantidade de candidatos: " + vagas[indice].candidatos.length +
            "\nCandidatos inscritos na vaga: " + candidatosEmTexto
        )
    }
}

function inscreverCandidato(){
    const nome = prompt("Insira o nome do candidato:")
    const indice = prompt("Insira o indice da vaga em que deseja inscrever o candidato.")

    if(vagas[indice] === undefined){
        alert("Vaga inserida não encontrada, tente novamente.")
        const novoIndice = prompt("Insira o novo indice da vaga: ")
        inscreverCandidato(nome, novoIndice)
    } else {
        const confirma = confirm("Deseja inscrever o candidato " + nome + " em " + vagas[indice].nome + "?" +
            "\nDescrição: " + vagas[indice].descricao + 
            "\nData limite: " + vagas[indice].data + 
            "\nQuantidade de candidatos: " + vagas[indice].candidatos.length
        )

        if(confirma){
            vagas[indice].candidatos.push(nome)
            alert("Candidato inscrito com sucesso!")
        } else {
            alert("O candidato não foi inscrito na vaga.")
        }
    }
}

function excluirVaga(){
    const indice = prompt("Insira o indice da vaga em que deseja excluir:")

    if(vagas[indice] === undefined){
        alert("Vaga inserida não encontrada. tente novamente:")
        const novoIndice = prompt("Insira um novo indice da vaga em que deseja excluir:")
        excluirVaga(novoIndice)
    } else {
        const confirma = confirm(
            "Deseja realmente excluir a seguinte vaga?" + 
            "\nNome da vaga: " + vagas[indice].nome +
            "\nDescrição: " + vagas[indice].descricao + 
            "\nData limite: " + vagas[indice].data + 
            "\nQuantidade de candidatos: " + vagas[indice].candidatos.length
        )

        if(confirma){
            const vagaExcluida = vagas.splice(indice, 1)
            alert("Vaga excluída com sucesso!")
            console.log(vagaExcluida)
        } else {
            alert("A vaga acabou não sendo excluída.")
        }
    }
}

function menu(){
    return prompt(
        "Insira uma das opções abaixo:" + 
        "\n1. Listas vagas" + "\n2. Criar vaga" + "\n3. Visualizar vaga" +
        "\n4. Inscrever candidato" + "\n5. Excluir vaga" + "\n6. Sair da Aplicação"
    )
}

function executar(){
    let opcao = ""

    do {
        opcao = menu()

        switch(opcao){
            case "1":
                // TODO: Listar vagas
                listarVagas()
                break
            case "2":
                // TODO: Criar vaga
                criarVaga()
                break
            case "3":
                // TODO: Visualizar vaga
                visualizarVaga()
                break
            case "4":
                // TODO: Inscrever candidato
                inscreverCandidato()
                break
            case "5":
                // TODO: Excluir vaga
                excluirVaga()
                break
            case "6":
                alert("Saindo da aplicação ...")
                break
            default:
                alert("Opção inserida inválida! Tente novamente.")
        }

    } while(opcao !== "6")

}

executar()