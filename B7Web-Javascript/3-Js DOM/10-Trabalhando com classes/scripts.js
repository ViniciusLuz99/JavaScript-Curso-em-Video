function clicou() {
  const button = document.querySelector(".botao");

  button.classList.add("classeAdicionada");
  button.classList.toggle("azul");

  if (button.classList.contains("azul")) {
    button.classList.replace("azul", "verde");
  } else {
    button.classList.replace("verde", "azul");
  }
};
