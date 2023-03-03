let pokemon = "Charmander";

function evolution() {
  pokemon = "Charmeleon";
}

console.log(pokemon);
evolution();
console.log(pokemon);

function criarAnimal() {
  let animal = "Cavalo";
}

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    var situacao = "Aprovado";
  } else {
    var aprovado = false;
    var situacao = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

avaliarNota(60);
avaliarNota(58);
