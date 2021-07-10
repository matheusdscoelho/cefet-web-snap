let mainEl = document.querySelector("main");

const toggleField = (value) => {
  mainEl.classList.toggle(
    `.${value}`,
    !document.querySelector("#visibilidade-das-marcacoes").checked
  );
};
