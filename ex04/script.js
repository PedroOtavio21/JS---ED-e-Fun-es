/* 
Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. 
As opções devem ser:

área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

function areaTriangulo(base, altura){
    return base * altura / 2
}

function areaRetangulo(base, altura){
    return base * altura
}

function areaQuadrado(lado){
    return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2
}

function areaCiruclo(raio){
    return 3.14 * raio * raio
}

function menu(){
    return prompt(
        "Insira uma das opções de cáculo abaixo:" + 
        "\n1. Área triângulo" + "\n2. Área retângulo" + "\n3. Área quadrado" + 
        "\n4. Área trapézio" + "\n5. Área círculo" + "\n6. Sair"
    )
}

function executar(){
    let opcao = ""

    do {
        opcao = menu()
        
        let resultado = 0
        switch(opcao){
            case "1":
                // TODO: Implementar Área Triângulo
                const baseTriangulo = parseFloat(prompt("Insira a base do triângulo:"))
                const alturaTriangulo = parseFloat(prompt("Insira a altura do triângulo:"))
                resultado = areaTriangulo(baseTriangulo, alturaTriangulo)
                alert(`Resultado da Operação 1: ${resultado}`)
                break
            case "2":
                // TODO: Implementar Área Retângulo
                const baseRetangulo = parseFloat(prompt("Insira a base do retângulo:"))
                const alturaRetangulo = parseFloat(prompt("Insira a altura do retângulo"))
                resultado = areaRetangulo(baseRetangulo, alturaRetangulo)
                alert(`Resultado da Operação 2: ${resultado}`)
                break
            case "3":
                // TODO: Implementar Área Quadrado
                const ladoQuadrado = parseFloat(prompt("Insira o lado do quadrado:"))
                resultado = areaQuadrado(ladoQuadrado)
                alert(`Resultado da Operação 3: ${resultado}`)
                break
            case "4":
                // TODO: Implementar Área Trapézio
                const baseMaior = parseFloat(prompt("Insira a base maior do trapézio:"))
                const baseMenor = parseFloat(prompt("Insira a base menor do trapézio:"))
                const alturaTrapezio = parseFloat(prompt("Insira a altura do trapézio:"))
                resultado = areaTrapezio(baseMaior, baseMenor, alturaTrapezio)
                alert(`Resultado da Operação 4: ${resultado}`)
                break
            case "5":
                // TODO: Implementar Círculo
                const raio = parseFloat(prompt("Insira o raio do círculo:"))
                resultado = areaCiruclo(raio)
                alert(`Resultado da Operação 5: ${resultado}`)
                break
            case "6":
                alert(`Você escolheu sair. Encerrado aplicação ...`)
                break
            default:
                alert(`Opção inserida inválida! Tente novamente.`)
        }
    } while(opcao !== "6")
}

executar()