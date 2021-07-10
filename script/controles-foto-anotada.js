const marcacaoSelecionadaEl = document.querySelectorAll(
  ".marcacao.selecionada"
);

document.querySelectorAll("section.controles").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target)
  });
});

const selecionaMarcacao = (el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("selecionada");
  });

  const x = parseInt(el.style.top);
  const y = parseFloat(el.style.left);
  const largura = parseInt(el.style.width);
  const altura = parseFloat(el.style.height);
  const formato = el.getAttribute("data-formato");

  document.getElementById("x-da-marcacao").value = x;
  document.getElementById("y-da-marcacao").value = y;
  document.getElementById("largura-da-marcacao").value = largura;
  document.getElementById("altura-da-marcacao").value = altura;
  document.getElementById("titulo-da-marcacao").value =
    el.getAttribute("data-titulo");
  document.getElementById("conteudo-da-marcacao").value =
    el.getAttribute("data-conteudo");
  document.getElementById("cor-da-marcacao").value =
    el.getAttribute("data-cor");
  document.querySelector(
    `[name=formato-da-marcacao][value=${formato}]`
  ).checked = true;
};

marcacaoSelecionadaEl.forEach((el) => selecionaMarcacao(el));
