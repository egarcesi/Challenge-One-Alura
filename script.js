let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Obtener elementos
    const lista = document.getElementById("listaNombres");
    const drumSound = document.getElementById("drumSound");
    const winSound = document.getElementById("winSound");

    // Reproducir sonido de redoble de tambores 🎵
    drumSound.play();

    // Animación de movimiento y color en la lista
    lista.classList.add("shake", "flash");

    // Sortear nombre después de un breve suspenso (2s)
    setTimeout(() => {
        lista.classList.remove("shake", "flash");

        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let nombreSorteado = nombres[indiceAleatorio];

        // Mostrar resultado
        document.getElementById("resultado").textContent = "🎁 El amigo sorteado es: " + nombreSorteado + " 🎉";

        // Reproducir sonido de victoria 🎵
        winSound.play();

        // Resaltar el `<li>` del nombre sorteado
        let itemsLista = document.querySelectorAll("#listaNombres li");
        itemsLista.forEach(item => item.classList.remove("resaltado")); // Quitar resaltado previo
        itemsLista[indiceAleatorio].classList.add("resaltado"); // Agregar resaltado al seleccionado

        // Lanzar confeti 🎊
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

    }, 1200); // 1.2 segundos de espera para el efecto de suspenso
}

