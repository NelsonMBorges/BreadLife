// Exemplo de ações do plano
const planoDeAcao = [
  { data: "31/07/2025", tarefa: "Instalar ventilação", risco: "Substancial" },
  { data: "31/07/2025", tarefa: "Treinamento ergonômico", risco: "Substancial" }
];

const acoesUl = document.getElementById("acoes");
planoDeAcao.forEach(acao => {
  const li = document.createElement("li");
  li.textContent = `${acao.data} – ${acao.tarefa} (${acao.risco})`;
  acoesUl.appendChild(li);
});

// Exemplo de funções com riscos
const funcoes = [
  {
    nome: "Padeiro – Linha 1",
    riscos: ["Exigência física", "Iluminação inadequada", "Postura prolongada"],
    condutas: ["Cinta ergonômica", "Banco semi-sentado", "Troca de iluminação"]
  },
  {
    nome: "Auxiliar de Produção – Linha 3",
    riscos: ["Repetitividade", "Postura", "Conflitos interpessoais"],
    condutas: ["Rodízio de funções", "Descanso de pé", "Programa de relacionamento"]
  }
];

const funcoesDiv = document.getElementById("funcoes");
funcoes.forEach(funcao => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${funcao.nome}</h3>
    <p><strong>Riscos:</strong> ${funcao.riscos.join(", ")}</p>
    <p><strong>Condutas:</strong> ${funcao.condutas.join(", ")}</p>`;
  funcoesDiv.appendChild(div);
});