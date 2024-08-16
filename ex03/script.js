/*
Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações:
1. Nome do proprietário.
2. Quantidade de quartos.
3. Quantidade de banheiros.
4. Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    `Quantidade de imóveis cadastrados: ${imoveis.length}
        Insira uma das opções abaixo:
        1. Cadastrar novo imóvel
        2. Mostrar imóveis cadastrados
        3. Sair da aplicação`
  );

  switch (opcao) {
    case "1":
      // TODO: implementar lógica de salvamento de imóvel
      const nomeProprietário = prompt(
        "Insira o nome do proprietário do imóvel:"
      );
      const qntdQuartos = prompt("Insira a quantidade de quartos disponíveis:");
      const qntdBanheiros = prompt(
        "Insira a quantidade de banheiros disponíveis:"
      );
      const possuiGaragem = prompt("O imóvel possui garagem? (sim | não)");

      const salvar = confirm(
        `Deseja salvar o imóvel escolhido? (sim - ok | não - cancel)
                Nome do proprietário: ${nomeProprietário}
                Quantidade de quartos: ${qntdQuartos}
                Quantidade de banheiros: ${qntdBanheiros}
                Possui garagem: ${possuiGaragem}`
      );

      if (salvar) {
        const imovel = {
          nomeProprietário: nomeProprietário,
          qntdQuartos: qntdQuartos,
          qntdBanheiros: qntdBanheiros,
          possuiGaragem: possuiGaragem,
        };
        imoveis.push(imovel);
        alert("O imóvel foi cadastrado com sucesso!");
        break;
      } else {
        alert("Não foi possível salvar o imóvel inserido.");
        break;
      }
    case "2":
      // TODO: Implementar lógica de visualização de todos os imóveis cadastrados
      for (let imovel of imoveis) {
        alert(
          `Nome do proprietário: ${imovel.nomeProprietário}
                    Quantidade de quartos: ${imovel.qntdQuartos}
                    Quantidade de banheiros: ${imovel.qntdBanheiros}
                    Possui garagem: ${imovel.possuiGaragem}`
        );
      }
      break;
    case "3":
      alert("Saindo da aplicação.");
      break;
    default:
      alert("Opção inserida é inválida! Voltando ao menu.");
  }
} while (opcao !== "3");
