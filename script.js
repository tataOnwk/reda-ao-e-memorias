const lista = document.getElementById("lista-redacoes");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("filtro");
const modal = document.getElementById("modal");

function atualizarResumo() {
  document.getElementById("total").textContent = redacoes.length;

  const notas = redacoes
    .filter(r => r.nota !== null)
    .map(r => r.nota);

  const media = notas.length
    ? Math.round(notas.reduce((a, b) => a + b, 0) / notas.length)
    : 0;

  document.getElementById("media").textContent = media;
}

function mostrarRedacoes() {
  lista.innerHTML = "";

  const termo = pesquisa.value.toLowerCase();
  const tipo = filtro.value;

  const encontradas = redacoes
    .map((redacao, indice) => ({ ...redacao, indice }))
    .filter(redacao => {
      const combina = redacao.titulo.toLowerCase().includes(termo);

      const temNota =
        tipo === "todas" ||
        (tipo === "com-nota" && redacao.nota !== null) ||
        (tipo === "sem-nota" && redacao.nota === null);

      return combina && temNota;
    });

  if (encontradas.length === 0) {
    lista.innerHTML = "<p>Nenhuma redação encontrada.</p>";
    return;
  }

  encontradas.forEach(redacao => {
    const card = document.createElement("article");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = `${redacao.indice + 1}. ${redacao.titulo}`;

    const nota = document.createElement("p");
    nota.textContent = redacao.nota === null
      ? "Nota não informada"
      : `Nota: ${redacao.nota} pontos`;

    const botao = document.createElement("button");
    botao.textContent = "Ler redação";
    botao.addEventListener("click", () => abrirRedacao(redacao));

    card.append(titulo, nota, botao);
    lista.appendChild(card);
  });
}

function abrirRedacao(redacao) {
  document.getElementById("modal-titulo").textContent = redacao.titulo;

  document.getElementById("modal-nota").textContent =
    redacao.nota === null
      ? "Nota não informada"
      : `Nota: ${redacao.nota} pontos`;

  document.getElementById("modal-texto").textContent = redacao.texto;

  modal.classList.add("ativo");
}

document.getElementById("fechar").addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("ativo");
  }
});

pesquisa.addEventListener("input", mostrarRedacoes);
filtro.addEventListener("change", mostrarRedacoes);

atualizarResumo();
mostrarRedacoes();



