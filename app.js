const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value;

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    let lista = "";
    for (let i = 0; i < amigos.length; i++) {
        lista += "<li>" + amigos[i] + "</li>";
    }

    document.getElementById("listaAmigos").innerHTML = lista;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = 
        "<li>El amigo secreto es: <strong>" + ganador + "</strong></li>";
}

function limpiarLista() {
    amigos.length = 0; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista que se encuentra
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado
}
