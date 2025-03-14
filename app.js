// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre !== "") {
        listaAmigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el input después de añadir
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSeleccionado}</strong></li>`;
    
    // Limpiar listas después del sorteo
    listaAmigos.length = 0;
    actualizarLista();
}

