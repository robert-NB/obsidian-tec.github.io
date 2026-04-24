// ===============================
// Chatbot mejorado - Robert Bonmatí
// ===============================

// Inicializar Fuse.js para búsqueda difusa sobre el dataset faqData
const fuse = new Fuse(faqData, {
    keys: ["pregunta"],
    threshold: 0.4 // tolerancia: 0 exacto, 1 muy flexible
});

// Lista de saludos comunes
const saludos = ["hola", "buenas", "qué tal", "buenos días", "buenas tardes", "hey"];

// Mostrar mensajes en el chat
function addMessage(text, sender = "bot") {
    const container = document.getElementById("chatbot-messages");
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg-user" : "msg-bot";
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

// Procesar lo que escribe el usuario
function processInput(query) {
    query = query
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // quitar acentos

    // Caso 1: Si es un saludo
    if (saludos.some(s => query.includes(s))) {
        return "¡Hola! 👋 ¿Cómo puedo ayudarte?";
    }

    // Caso 2: Buscar en FAQ con Fuse.js
    const results = fuse.search(query);
    if (results.length > 0) {
        return results[0].item.respuesta;
    }

    // Caso 3: Si no encuentra nada
    return "Lo siento, no he podido encontrar la respuesta.";
}

// Manejar envío de mensaje
function handleSend() {
    const input = document.getElementById("chatbot-input");
    const query = input.value.trim();

    if (query) {
        addMessage(query, "user");
        const answer = processInput(query);
        setTimeout(() => addMessage(answer, "bot"), 500);
        input.value = "";
    }
}

// Evento: botón "Enviar"
document.getElementById("chatbot-send").addEventListener("click", handleSend);

// Evento: Enter para enviar
document.getElementById("chatbot-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleSend();
    }
});

// Toggle abrir/cerrar chatbot
document.getElementById("chatbot-toggle").addEventListener("click", () => {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
});
