//cria um array para armazenar os participantes da corrida
let lista = [];

//função responsavel por armazernar adicionar os partipantes na tabela
//e, ao mesmo tempo, adiciona-los no array
function teste1() {
  let nome = document.dados.nome.value;
  let tempo = document.dados.tempo.value;

  if (validar(nome) && validar(tempo)) {
    let tabela = document.getElementById("tabela");
    let largada = tabela.rows.length;
    //cria uma nova linha
    let newRow = tabela.insertRow(largada);
    // Faz um loop para criar as colunas
    for (var j = 0; j < 3; j++) {
      // Insere uma coluna na nova linha
      newCell = newRow.insertCell(j);
      // Insere um conteúdo na coluna
      if (j == 0) {
        newCell.innerHTML = largada;
      } else if (j == 1) {
        newCell.innerHTML = nome;
      } else {
        newCell.innerHTML = tempo;
      }
    }
    //cria um objeto para representar os participantes
    let obj = [];
    obj["largada"] = largada;
    obj["nome"] = nome;
    obj["tempo"] = tempo;

    //adiciona o participante no array
    lista.push(obj);

    //limpa os campos de inserção de dados
    document.dados.nome.value = "";
    document.dados.tempo.value = "";
    console.log(lista);
  }
}

//função responsavel por ordenar o tempo dos particpantes e criar a tabela com o resultado da corrida
function ordenar() {
  //ordena o array de partipantes com base no tempo
  lista.sort(function(a, b) {
    if (a.tempo < b.tempo) {
      return -1;
    }

    if (a.tempo > b.tempo) {
      return 1;
    }

    return 0;
  });

  //faz o controle do menor tempo
  let primeiro = lista[0];
  let menor = primeiro.tempo;
  for (let i = 0; i < lista.length; i++) {
    if (menor > lista[i].tempo) {
      menor = lista[i].tempo;
    }
  }

  //torna a tabela com o resultado da corrida visivel
  document.getElementById("tabelaRes").style.visibility = "visible";
  //cria a tabela com resultado
  let tabelaRes = document.getElementById("tabelaRes");
  //faz um loop para criar uma nova linhas, as colunas e adicona os dados de cada partipante
  for (let i = 0; i < lista.length; i++) {
    let newRow = tabelaRes.insertRow(i + 1);
    newCell = newRow.insertCell(0);
    newCell.innerHTML = lista[i].largada;
    newCell = newRow.insertCell(1);
    newCell.innerHTML = lista[i].nome;
    newCell = newRow.insertCell(2);
    newCell.innerHTML = lista[i].tempo;
    newCell = newRow.insertCell(3);
    if (lista[i].tempo == menor) {
      newCell.innerHTML = "Vencedor(a)!";
    } else {
      newCell.innerHTML = "-";
    }
  }
}

//função responsavel por fazer a validação dos dados digitados
function validar(campo) {
  let n = campo;
  //verifica se os capos de nome não estão vazios e se o tempo é maior que zero
  if (n.length < 0 || n.value <= 0) {
    window.alert("Informe o valor corretamente");
    campo.value = "";
    campo.focus();
    return false;
  }
  return true;
}
