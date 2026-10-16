// Área do cliente GT Design. Confira o número abaixo antes de publicar.
const WHATSAPP_NUMBER = "5575988532747";
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".choose-service").forEach(button => button.addEventListener("click", () => {
  document.getElementById("service").value = button.dataset.service;
  document.getElementById("pedir").scrollIntoView({behavior:"smooth"});
  document.getElementById("name").focus({preventScroll:true});
}));
document.getElementById("request-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name")||"").trim(), contact = String(data.get("contact")||"").trim();
  const service = String(data.get("service")||"").trim(), details = String(data.get("details")||"").trim();
  const deadline = String(data.get("deadline")||"").trim(), status = document.getElementById("form-message");
  if (!name || !contact || !service || !details) { status.textContent = "Confira os campos obrigatórios antes de continuar."; return; }
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) { status.textContent = "Configure o número de WhatsApp no arquivo app.js antes de publicar."; return; }
  const message = ["Olá! Vim pela área do cliente da GT Design Digital & Informática.","","*Nova solicitação de serviço*",`*Nome:* ${name}`,`*Meu contato:* ${contact}`,`*Serviço:* ${service}`,`*O que preciso:* ${details}`,deadline?`*Prazo desejado:* ${deadline}`:""].filter(Boolean).join("\n");
  status.textContent = "O WhatsApp será aberto. Revise a mensagem e toque em Enviar.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
});