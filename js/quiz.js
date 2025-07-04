const preguntas = [
            { 
                pregunta: "¿Qué crees que buscaba Szyszlo al pintar?", 
                opciones: ["A. Representar la realidad de manera literal", "B. Expresar emociones personales sin contexto", "C. Conectar con lo ancestral desde un lenguaje moderno"], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/fernando-de-szyszlo/img/numero-1.png", 
                mensaje: ["¡Incorrecto! Szyszlo creía que el arte debía tener “memoria y misterio”, y que lo precolombino podía leerse con formas abstractas.", "¡Incorrecto! Szyszlo creía que el arte debía tener “memoria y misterio”, y que lo precolombino podía leerse con formas abstractas.", "¡Correcto! Szyszlo creía que el arte debía tener “memoria y misterio”, y que lo precolombino podía leerse con formas abstractas."] 
            },
            { 
                pregunta: "¿Qué técnica predomina en su obra?", 
                opciones: ["A. Collage y arte digital", "B. Pintura acrílica figurativa", "C. Óleo con textura, geometría y simbolismo"], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/fernando-de-szyszlo/img/numero-2.png", 
                mensaje: ["Incorrecto! Usaba óleo con capas densas y colores rituales para crear atmósferas que evocan espacios sagrados.", "¡Incorrecto! Usaba óleo con capas densas y colores rituales para crear atmósferas que evocan espacios sagrados.", "¡Correcto! Usaba óleo con capas densas y colores rituales para crear atmósferas que evocan espacios sagrados."] 
            },
            { 
                pregunta: "¿Qué significa una obra como Paracas: La Noche?", 
                opciones: ["A. Es una copia de textiles antiguos.", "B. Es un experimento geométrico sin contenido.", "C. Es una abstracción inspirada en los rituales y simbolismos Paracas."], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/fernando-de-szyszlo/img/numero-3.png", 
                mensaje: ["¡Casi! Pero no es correcto. La obra no busca copiar literalmente ni hacer un ejercicio vacío. Es una abstracción profunda, inspirada en los rituales, colores y simbolismos de la antigua cultura Paracas.", "¡Casi! Pero no es correcto. La obra no busca copiar literalmente ni hacer un ejercicio vacío. Es una abstracción profunda, inspirada en los rituales, colores y simbolismos de la antigua cultura Paracas.", "¡Correcto! La obra no busca copiar literalmente ni hacer un ejercicio vacío. Es una abstracción profunda, inspirada en los rituales, colores y simbolismos de la antigua cultura Paracas."] 
            },
            { 
                pregunta: "¿Qué lugar puedes visitar hoy en Lima para ver su obra?", 
                opciones: ["A. Solo en galerías privadas.", "B. En su casa particular.", "C. En el Museo de Arte de Lima (MALI) y el MAC Lima."], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/fernando-de-szyszlo/img/numero-4.png", 
                mensaje: ["¡Incorrecto! Ambos museos exhiben sus piezas: el MALI de forma permanente, y el MAC con una exposición por su centenario.", "¡Incorrecto! Ambos museos exhiben sus piezas: el MALI de forma permanente, y el MAC con una exposición por su centenario.","¡Correcto! Ambos museos exhiben sus piezas: el MALI de forma permanente, y el MAC con una exposición por su centenario."] 
            },
            { 
                pregunta: "Según Szyszlo, ¿qué debe hacer el arte?", 
                opciones: ["A. Decorar espacios", "B. Responder a modas", "C. Trascender el tiempo y conectarnos con lo sagrado"], 
                correcta: 2, 
                imagen: "https://nuevasnarrativasec.github.io/fernando-de-szyszlo/img/numero-5.png", 
                mensaje: ["¡Incorrecto! Szyszlo decía: “El arte verdadero es una forma de conocimiento, una forma de religar lo humano con lo misterioso.”", "¡Incorrecto! Szyszlo decía: “El arte verdadero es una forma de conocimiento, una forma de religar lo humano con lo misterioso.”","¡Correcto! Szyszlo decía: “El arte verdadero es una forma de conocimiento, una forma de religar lo humano con lo misterioso.”"] 
            },            
        ];

        let indicePregunta = 0;
        let respuestasCorrectas = 0;

        function mostrarPregunta() {
            const quizContainer = document.getElementById("quiz");
            const preguntaActual = preguntas[indicePregunta];
            let html = `<h2>${preguntaActual.pregunta}</h2>`;
            html += `<img src="${preguntaActual.imagen}" alt="Imagen de la pregunta" style="display: block; margin: 0 auto; max-width:80px; height:auto; margin-bottom:10px;">`;
            preguntaActual.opciones.forEach((opcion, index) => {
                html += `<button type="button" class='opcion' onclick='seleccionarRespuesta(${index})'>${opcion}</button>`;
            });
            html += `<p id='mensaje' style='display:none'></p>`;
            html += `<button id='siguiente' onclick='siguientePregunta()' disabled>Siguiente</button>`;
            quizContainer.innerHTML = html;
        }

        function seleccionarRespuesta(index) {
            const botones = document.querySelectorAll(".opcion");
            const mensaje = document.getElementById("mensaje");
            if (index === preguntas[indicePregunta].correcta) {
                botones[index].style.backgroundColor = "green";
                mensaje.textContent = preguntas[indicePregunta].mensaje[index];
                mensaje.style.color = "green";
                mensaje.style.display = "block";
                respuestasCorrectas++;
            } else {
                botones[index].style.backgroundColor = "red";
                mensaje.textContent = preguntas[indicePregunta].mensaje[index];
                mensaje.style.color = "red";
                mensaje.style.display = "block";
            }
            document.getElementById("siguiente").disabled = false;
            botones.forEach(boton => boton.disabled = true);

            window.scrollBy({ top: 0, behavior: "smooth" });
        }

        function siguientePregunta() {
            indicePregunta++;
            if (indicePregunta < preguntas.length) {
                mostrarPregunta();
            } else {
                mostrarResultado();
            }
        }

        function mostrarResultado() {
            let mensajeFinal = "";
            let imagen = "";
        
            if (respuestasCorrectas <= 1) {
                mensajeFinal = "¡Uy! Parece que aún no conoces a Fernando de Szyszlo. Pero no te preocupes, te animamos a volver a revisar este especial para descubrir su vida y obra.";
                imagen = "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/resultado-1.webp"; 
            } else if (respuestasCorrectas <= 4) {
                mensajeFinal = "¡Vas por buen camino! Conoces algunos aspectos de Szyszlo, pero todavía hay mucho por explorar. Sigue descubriendo su legado.";
                imagen = "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/resultado-2.webp"; 
            } else {
                mensajeFinal = "¡Impresionante! Eres un verdadero conocedor de Szyszlo. Tu admiración y conocimiento sobre el maestro del arte abstracto peruano están a otro nivel.";
                imagen = "https://nuevasnarrativasec.github.io/trivia-impuesto-a-la-renta/img/resultado-3.webp"; 
            }
        
            document.getElementById("quiz").innerHTML = `
                <h2>Trivia finalizada</h2>
                <p>Respuestas correctas: ${respuestasCorrectas} de ${preguntas.length}</p>
                <!--<img src="${imagen}" alt="Mensaje final" width="100%">-->
                <p>${mensajeFinal}</p>
                <button onclick='reiniciarTest()' id='reset'>Reiniciar</button>
            `;
        }        

        function reiniciarTest() {
            indicePregunta = 0;
            respuestasCorrectas = 0;
            mostrarPregunta();
        }

        //document.addEventListener("DOMContentLoaded", mostrarPregunta);

        document.addEventListener("DOMContentLoaded", function () {
            const btnComenzar = document.getElementById("btn-comenzar");
            const pantallaInicial = document.getElementById("pantalla-inicial");
            const quiz = document.getElementById("quiz");

            btnComenzar.addEventListener("click", function () {
                pantallaInicial.style.display = "none";
                quiz.style.display = "block";
                mostrarPregunta();
            });
        });