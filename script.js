const impressoras = {
  bambu: 120,
  ender: 110,
  prusa: 130
};

// consumo automático
document.getElementById("impressora").addEventListener("change", e => {
  const consumo = impressoras[e.target.value];
  document.getElementById("consumo").value = consumo || "";
});

// suporte opcional
document.getElementById("usarSuporte").addEventListener("change", e => {
  document.getElementById("boxSuporte").classList.toggle("hidden", !e.target.checked);
});

function calcular() {
  const pesoPeca = Number(pesoPecaEl.value);
  const precoKilo = Number(precoKiloEl.value);
  const pesoSuporte = usarSuporte.checked ? Number(pesoSuporteEl.value) || 0 : 0;
  const duracao = Number(duracaoEl.value);
  const consumo = Number(consumoEl.value);
  const tarifa = Number(tarifaEl.value);
  const manutencao = Number(manutencaoEl.value);
  const lucro = Number(lucroEl.value);
  const marketplace = marketplaceEl.value;

  if (!pesoPeca || !precoKilo || !duracao || !consumo) {
    resultado.innerText = "⚠️ Preencha todos os campos obrigatórios.";
    return;
  }

  const custoFilamento = ((pesoPeca + pesoSuporte) / 1000) * precoKilo;
  const custoEnergia = ((consumo / 1000) * duracao) * tarifa;
  const custoManutencao = duracao * manutencao;

  let custoTotal = custoFilamento + custoEnergia + custoManutencao;
  let precoFinal = custoTotal * (1 + lucro / 100);

  if (marketplace === "shopee") precoFinal *= 1.14;
  if (marketplace === "ml") precoFinal += precoFinal * 0.16 + 6;

  resultado.innerHTML = `
    Filamento: R$ ${custoFilamento.toFixed(2)}<br>
    Energia: R$ ${custoEnergia.toFixed(2)}<br>
    Manutenção: R$ ${custoManutencao.toFixed(2)}<br>
    <hr>
    <strong>Preço final: R$ ${precoFinal.toFixed(2)}</strong>
  `;
}

// atalhos DOM
const pesoPecaEl = document.getElementById("pesoPeca");
const precoKiloEl = document.getElementById("precoKilo");
const pesoSuporteEl = document.getElementById("pesoSuporte");
const usarSuporte = document.getElementById("usarSuporte");
const duracaoEl = document.getElementById("duracao");
const consumoEl = document.getElementById("consumo");
const tarifaEl = document.getElementById("tarifa");
const manutencaoEl = document.getElementById("manutencao");
const lucroEl = document.getElementById("lucro");
const marketplaceEl = document.getElementById("marketplace");
const resultado = document.getElementById("resultado");




