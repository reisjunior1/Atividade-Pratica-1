function calc() {
  let n1 = document.dados.amplitude;
  let n2 = document.dados.tempo;
  if (validar(n1) && validar(n2)) {
    let mag =
      Math.log10(parseFloat(n1.value)) +
      3 * Math.log10(8 * parseFloat(n2.value)) -
      2.92;
    if (mag < 3.5) {
      document.dados.resultado.value =
        mag.toFixed(1) + " - Geralmete não sentindo, mas gravado.";
    } else if (mag >= 3.5 && mag < 5.4) {
      document.dados.resultado.value =
        mag.toFixed(1) + " - Às vezes sentido, mas geralmente não causa danos.";
    } else if (mag >= 5.4 && mag < 6.0) {
      document.dados.resultado.value =
        mag.toFixed(1) +
        " - Causa pequenos danos a prédios bem construídos, mas pode danificar seriamente casa mal construidas da região.";
    } else if (mag >= 6.0 && mag < 6.9) {
      document.dados.resultado.value =
        mag.toFixed(1) +
        " - Pode ser destrutivo em áreas em torno de 100 km do epicentro.";
    } else if (mag >= 6.9 && mag < 8.0) {
      document.dados.resultado.value =
        mag.toFixed(1) +
        " - Grande Terremoto. Pode causar serios danos em uma grande área.";
    } else {
      document.dados.resultado.value =
        mag.toFixed(1) +
        " - Enorme Terremoto. Pode causar graves danos em muitas áreas mesmo que estejam a centenas de quilomestros";
    }
    document.getElementById("resultado").style.visibility = "visible";
  }
}

//função responsável por validar os dados
function validar(campo) {
  let n = campo;
  //verifica se os campos estão vazios e se os valores são maiores ou iguais a zero
  if (n.length == 0 || n.value <= 0) {
    window.alert("Informe o valor corretamente");
    campo.value = "";
    campo.focus();
    return false;
  }
  return true;
}
