// ===== EDITE AQUI =====
const WHATSAPP = "5581987338916"; // 55 (Brasil) + DDD 81 + número, só números
// ======================

const waBase = "https://wa.me/" + WHATSAPP;

// botão do topo abre o WhatsApp direto
document.querySelectorAll("[data-wa]").forEach(function(a){
  a.href = waBase + "?text=" + encodeURIComponent("Olá! Vi seu portfólio e queria conversar.");
  a.target = "_blank"; a.rel = "noopener";
});

// formulário monta a mensagem
const nome = document.getElementById("nome");
const msg = document.getElementById("msg");
const send = document.getElementById("waSend");
function atualizarLink(){
  var n = nome.value.trim();
  var m = msg.value.trim() || "Quero saber mais sobre seus serviços.";
  var texto = "Olá! " + (n ? "Meu nome é " + n + ". " : "") + m;
  send.href = waBase + "?text=" + encodeURIComponent(texto);
}
nome.addEventListener("input", atualizarLink);
msg.addEventListener("input", atualizarLink);
atualizarLink();

// filtro de skills
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".skill");
tabs.forEach(function(t){
  t.addEventListener("click", function(){
    tabs.forEach(function(x){ x.setAttribute("aria-pressed", x === t ? "true" : "false"); });
    var f = t.dataset.f;
    cards.forEach(function(c){
      c.hidden = !(f === "todas" || c.dataset.c.split(" ").indexOf(f) !== -1);
    });
  });
});


var av=document.getElementById("avatar"),ft=document.querySelector(".foto");if(av&&ft){av.src=ft.src;}

document.getElementById("ano").textContent = new Date().getFullYear();
