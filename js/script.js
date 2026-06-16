const flores = [
    {
        id: 1,
        nombre: "Rosa Roja",
        imagen: "multimedia/img1.jpeg",
        significado: "Representa el amor profundo y la pasión.",
        emocion: "Amor"
    },
    {
        id: 2,
        nombre: "Rosa Blanca",
        imagen: "multimedia/img2.jpeg",
        significado: "Simboliza pureza, respeto y sinceridad.",
        emocion: "Paz"
    },
    {
        id: 3,
        nombre: "Tulipán",
        imagen: "multimedia/img3.jpeg",
        significado: "Expresa amor verdadero y elegancia.",
        emocion: "Amor"
    },
    {
        id: 4,
        nombre: "Girasol",
        imagen: "multimedia/img4.jpeg",
        significado: "Representa éxito, felicidad y prosperidad.",
        emocion: "Prosperidad"
    },
    {
        id: 5,
        nombre: "Lirio",
        imagen: "multimedia/img5.jpg",
        significado: "Simboliza nobleza y renovación espiritual.",
        emocion: "Paz"
    },
    {
        id: 6,
        nombre: "Margarita",
        imagen: "multimedia/img6.jpg",
        significado: "Representa inocencia y lealtad.",
        emocion: "Gratitud"
    },
    {
        id: 7,
        nombre: "Orquídea",
        imagen: "multimedia/img7.jpeg",
        significado: "Simboliza abundancia y prosperidad.",
        emocion: "Prosperidad"
    },
    {
        id: 8,
        nombre: "Lavanda",
        imagen: "multimedia/img8.jpg",
        significado: "Transmite calma y serenidad.",
        emocion: "Paz"
    },
    {
        id: 9,
        nombre: "Peonía",
        imagen: "multimedia/img9.jpg",
        significado: "Representa amor y felicidad.",
        emocion: "Amor"
    },
    {
        id: 10,
        nombre: "Clavel",
        imagen: "multimedia/img10.jpg",
        significado: "Expresa admiración y agradecimiento.",
        emocion: "Gratitud"
    },
    {
        id: 11,
        nombre: "Jazmín",
        imagen: "multimedia/img11.jpeg",
        significado: "Simboliza paz y armonía.",
        emocion: "Paz"
    },
    {
        id: 12,
        nombre: "Flor de Loto",
        imagen: "multimedia/img12.jpeg",
        significado: "Representa pureza y tranquilidad.",
        emocion: "Paz"
    },
    {
        id: 13,
        nombre: "Hortensia",
        imagen: "multimedia/img13.jpeg",
        significado: "Simboliza gratitud y comprensión.",
        emocion: "Gratitud"
    },
    {
        id: 14,
        nombre: "Camelia",
        imagen: "multimedia/img14.jpeg",
        significado: "Expresa admiración y reconocimiento.",
        emocion: "Gratitud"
    },
    {
        id: 15,
        nombre: "Narciso",
        imagen: "multimedia/img15.jpeg",
        significado: "Representa nuevos comienzos.",
        emocion: "Prosperidad"
    },
    {
        id: 16,
        nombre: "Azucena",
        imagen: "multimedia/img16.jpeg",
        significado: "Simboliza esperanza y optimismo.",
        emocion: "Prosperidad"
    }
];

const contenedorFlores = document.querySelector("#contenedorFlores");

if (contenedorFlores) {

    flores.forEach(flor => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card-flor");

        tarjeta.innerHTML = `
            <img src="${flor.imagen}" alt="${flor.nombre}">

            <div class="card-contenido">
                <h3>${flor.nombre}</h3>

                <button class="btn-significado"
                        data-id="${flor.id}">
                    Descubrir significado
                </button>
            </div>
        `;

        contenedorFlores.appendChild(tarjeta);
    });

}


const modal = document.querySelector("#modalFlor");
const contenidoModal = document.querySelector("#contenidoModal");
const cerrarModal = document.querySelector("#cerrarModal");

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn-significado")) {

        const id = parseInt(e.target.dataset.id);

        const flor = flores.find(f => f.id === id);

        contenidoModal.innerHTML = `
            <img src="${flor.imagen}" alt="${flor.nombre}">

            <h2>${flor.nombre}</h2>

            <p>
                <strong>Significado:</strong>
                ${flor.significado}
            </p>

            <p>
                <strong>Emoción:</strong>
                ${flor.emocion}
            </p>
        `;

        modal.style.display = "flex";
    }

});

if (cerrarModal) {

    cerrarModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});


const contenedorEmociones =
    document.querySelector("#contenedorEmociones");

if (contenedorEmociones) {

    const emociones = [
        "Amor",
        "Gratitud",
        "Paz",
        "Prosperidad"
    ];

    emociones.forEach(emocion => {

        const floresFiltradas =
            flores.filter(
                flor => flor.emocion === emocion
            );

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("card-emocion");

        let lista = "";

        floresFiltradas.forEach(flor => {

            lista += `<li>${flor.nombre}</li>`;

        });

        tarjeta.innerHTML = `
            <h3>${emocion}</h3>

            <ul>
                ${lista}
            </ul>
        `;

        contenedorEmociones
            .appendChild(tarjeta);

    });

}


const formulario =
    document.querySelector("#formularioContacto");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre =
            document.querySelector("#nombre").value.trim();

        const correo =
            document.querySelector("#correo").value.trim();

        const evento =
            document.querySelector("#evento").value;

        const fecha =
            document.querySelector("#fecha").value;

        const mensaje =
            document.querySelector("#mensaje").value.trim();

        const respuesta =
            document.querySelector("#respuesta");

        if (
            nombre === "" ||
            correo === "" ||
            evento === "" ||
            fecha === "" ||
            mensaje === ""
        ) {

            respuesta.innerHTML =
                "Por favor complete todos los campos.";

            respuesta.style.color = "red";

            return;
        }

        const regexCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(correo)) {

            respuesta.innerHTML =
                "Ingrese un correo válido.";

            respuesta.style.color = "red";

            return;
        }

        respuesta.innerHTML =
            "Consulta enviada exitosamente. Nos comunicaremos pronto.";

        respuesta.style.color = "green";

        formulario.reset();

    });

}