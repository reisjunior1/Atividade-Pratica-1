//Primeiro Bloco
// clicar na resposta correta muda a cor da alternativa correta
//para verde e bloqueia todos os botões do bloco1
function certoBloco1() {
  document.getElementById("certo1").style.backgroundColor = "#20bf6b";
  document.querySelector(".btn00").setAttribute("disabled", "disabled");
  document.querySelector(".btn01").setAttribute("disabled", "disabled");
  document.querySelector(".btn02").setAttribute("disabled", "disabled");
  document.querySelector(".btn03").setAttribute("disabled", "disabled");
}
//clicar na resposta incorreta muda a cor da alternativa correta para vermelho
//e bloqueia todos os botões do bloco1
function erradoBloco1() {
  document.getElementById("certo1").style.backgroundColor = "#ff4d4d";
  document.querySelector(".btn00").setAttribute("disabled", "disabled");
  document.querySelector(".btn01").setAttribute("disabled", "disabled");
  document.querySelector(".btn02").setAttribute("disabled", "disabled");
  document.querySelector(".btn03").setAttribute("disabled", "disabled");
}

//Segundo Bloco
// clicar na resposta correta muda a cor da alternativa correta
//para verde e bloqueia todos os botões do bloco2
function certoBloco2() {
  document.getElementById("certo2").style.backgroundColor = "#20bf6b";
  document.querySelector(".btn10").setAttribute("disabled", "disabled");
  document.querySelector(".btn11").setAttribute("disabled", "disabled");
  document.querySelector(".btn12").setAttribute("disabled", "disabled");
  document.querySelector(".btn13").setAttribute("disabled", "disabled");
}
//clicar na resposta incorreta muda a cor da alternativa correta para vermelho
//e bloqueia todos os botões do bloco2
function erradoBloco2() {
  document.getElementById("certo2").style.backgroundColor = "#ff4d4d";
  document.querySelector(".btn10").setAttribute("disabled", "disabled");
  document.querySelector(".btn11").setAttribute("disabled", "disabled");
  document.querySelector(".btn12").setAttribute("disabled", "disabled");
  document.querySelector(".btn13").setAttribute("disabled", "disabled");
}

//Terciro Bloco
// clicar na resposta correta muda a cor da alternativa correta
//para verde e bloqueia todos os botões do bloco3
function certoBloco3() {
  document.getElementById("certo3").style.backgroundColor = "#20bf6b";
  document.querySelector(".btn30").setAttribute("disabled", "disabled");
  document.querySelector(".btn31").setAttribute("disabled", "disabled");
  document.querySelector(".btn32").setAttribute("disabled", "disabled");
  document.querySelector(".btn33").setAttribute("disabled", "disabled");
}
//clicar na resposta incorreta muda a cor da alternativa correta para vermelho
//e bloqueia todos os botões do bloco2
function erradoBloco3() {
  document.getElementById("certo3").style.backgroundColor = "#ff4d4d";
  document.querySelector(".btn30").setAttribute("disabled", "disabled");
  document.querySelector(".btn31").setAttribute("disabled", "disabled");
  document.querySelector(".btn32").setAttribute("disabled", "disabled");
  document.querySelector(".btn33").setAttribute("disabled", "disabled");
}

//Terciro Bloco
// clicar na resposta correta muda a cor da alternativa correta
//para verde e bloqueia todos os botões do bloco3
function certoBloco4() {
  document.getElementById("certo4").style.backgroundColor = "#20bf6b";
  document.querySelector(".btn40").setAttribute("disabled", "disabled");
  document.querySelector(".btn41").setAttribute("disabled", "disabled");
  document.querySelector(".btn42").setAttribute("disabled", "disabled");
  document.querySelector(".btn43").setAttribute("disabled", "disabled");
}
//clicar na resposta incorreta muda a cor da alternativa correta para vermelho
//e bloqueia todos os botões do bloco2
function erradoBloco4() {
  document.getElementById("certo4").style.backgroundColor = "#ff4d4d";
  document.querySelector(".btn40").setAttribute("disabled", "disabled");
  document.querySelector(".btn41").setAttribute("disabled", "disabled");
  document.querySelector(".btn42").setAttribute("disabled", "disabled");
  document.querySelector(".btn43").setAttribute("disabled", "disabled");
}
