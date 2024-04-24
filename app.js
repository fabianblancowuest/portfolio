document.addEventListener("DOMContentLoaded", function () {
	const subtitle = document.querySelector(".subtitle");
	const text = subtitle.textContent;

	function typeWriterEffect() {
		subtitle.textContent = "";

		let i = 0;
		function type() {
			if (i < text.length) {
				subtitle.textContent += text.charAt(i);
				i++;
				setTimeout(type, 100); // Velocidad de escritura en milisegundos
			} else {
				setTimeout(erase, 2000); // Tiempo de espera antes de borrar
			}
		}

		function erase() {
			if (subtitle.textContent.length > 0) {
				subtitle.textContent = text.substring(
					0,
					subtitle.textContent.length - 1,
				);
				setTimeout(erase, 50); // Velocidad de borrado en milisegundos
			} else {
				setTimeout(typeWriterEffect, 1000); // Tiempo de espera antes de empezar de nuevo
			}
		}

		type();
	}

	typeWriterEffect(); // Iniciar el efecto
});
