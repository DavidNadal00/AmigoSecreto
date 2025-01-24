let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo !== "") {
        listaAmigos.push(nombreAmigo);
        mostrarAmigos();
    } else {
        alert("Por favor ingrese un nombre válido.")
    }
}
function mostrarAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";

    listaAmigos.forEach(function (amigo) {
        let listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaElement.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    let resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = "El amigo secreto es: " + amigoSorteado;
}


