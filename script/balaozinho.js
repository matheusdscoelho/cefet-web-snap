let balaozinhoEl = document.querySelector("#balaozinho");
let marcacaoEl = document.querySelectorAll(".marcacao");

marcacaoEl.forEach((el) =>
  el.addEventListener("mouseover", function (e) {
    balaozinhoEl.innerHTML = `<h2>${e.target.getAttribute("data-titulo")}</h2>
          <p>${e.target.getAttribute("data-conteudo")}</p>`;
  })
);

marcacaoEl.forEach((el) =>
  el.addEventListener("mousemove", function (e) {
    balaozinhoEl.style.left = `${e.pageX}px`;
    balaozinhoEl.style.top = `${e.pageX}px`;
  })
);

marcacaoEl.forEach((el) =>
  el.addEventListener("mouseout", function (e) {
    balaozinhoEl.innerHTML = "";
  })
);
