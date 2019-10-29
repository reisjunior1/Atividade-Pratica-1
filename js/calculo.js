//função que faz a validação dos campos
function validar(campo) {
  let n = campo;
  //verifica se os campos estão vazios e se os valores passados são positivos
  if (n.length == 0 || n.value <= 0) {
    window.alert("Informe o valor corretamente");
    campo.value = "";
    campo.focus();
    return false;
  }
  return true;
}

//função responsável por fazer o calculo do imc
function calcular() {
  let n1 = document.dados.peso;
  let n2 = document.dados.altura;
  if (validar(n1) && validar(n2)) {
    let res =
      parseFloat(n1.value) / (parseFloat(n2.value) * parseFloat(n2.value));
    if (res < 18.5) {
      document.dados.res.value = res.toFixed(2) + " - Subnutrido";
    } else if (res >= 18.5 && res <= 24.9) {
      document.dados.res.value = res.toFixed(2) + " - Peso Saudável";
    } else if (res > 24.9 && res <= 29.9) {
      document.dados.res.value = res.toFixed(2) + " - Sobrepeso";
    } else if (res > 29.9 && res <= 34.9) {
      document.dados.res.value = res.toFixed(2) + " - Obsidade Grau 1";
    } else if (res > 34.9 && res <= 39.9) {
      document.dados.res.value = res.toFixed(2) + " - Obsidade Grau 2";
    } else {
      document.dados.res.value = res.toFixed(2) + " - Obsidade Grau 3";
    }
  }
}

//função responsável por calcular o intervalo de peso saudavel para a pessoa
function calculaIntervalo() {
  let n = document.dados.altura;
  let p1 = 0;
  let p2 = 0;
  let peso = 0;
  //loop que calcula o intervanlo de peso saudavel
  while (p1 == 0 || p2 == 0) {
    let aux = peso / (n.value * n.value);
    if (p1 == 0) {
      if (aux.toFixed(1) >= 18.5) {
        p1 = peso;
      }
    }
    if (aux.toFixed(1) > 24.9) {
      p2 = peso - 1;
      break;
    }
    peso++;
  }
  document.dados.intervalo.value = p1 + "KG - " + p2 + "KG";
}
