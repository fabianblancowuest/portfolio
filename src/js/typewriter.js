let typingTimeout;
let erasingTimeout;
let waitingTimeout;

function typeWriterEffect(phrases) {
	// Limpiar cualquier ejecución previa
	clearTimeout(typingTimeout);
	clearTimeout(erasingTimeout);
	clearTimeout(waitingTimeout);
	subtitle.textContent = "";

	const selectedPhrases = phrases;
	let currentIndex = 0;

	// Crear el elemento del cursor
	const cursor = document.createElement("span");
	cursor.classList.add("typing-cursor");
	subtitle.appendChild(cursor);

	function type() {
		const text = selectedPhrases[currentIndex];
		let i = 0;

		function typeCharacter() {
			if (i < text.length) {
				subtitle.textContent = text.substring(0, i + 1); // Actualiza el texto
				subtitle.appendChild(cursor); // Asegura que el cursor esté al final
				i++;
				typingTimeout = setTimeout(typeCharacter, 100); // Velocidad de escritura en milisegundos
			} else {
				waitingTimeout = setTimeout(erase, 2000); // Tiempo de espera antes de borrar
			}
		}

		typeCharacter();
	}

	function erase() {
		const text = selectedPhrases[currentIndex];
		let i = text.length - 1;

		function eraseCharacter() {
			if (i >= 0) {
				subtitle.textContent = text.substring(0, i);
				subtitle.appendChild(cursor); // Asegura que el cursor esté al final
				i--;
				erasingTimeout = setTimeout(eraseCharacter, 50); // Velocidad de borrado en milisegundos
			} else {
				currentIndex = (currentIndex + 1) % selectedPhrases.length; // Avanzar al siguiente índice
				waitingTimeout = setTimeout(type, 1000); // Tiempo de espera antes de empezar la próxima frase
			}
		}

		eraseCharacter();
	}

	type();
}

export { typeWriterEffect };
