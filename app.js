document.addEventListener("DOMContentLoaded", function () {
	const subtitle = document.querySelector(".subtitle");
	const text = subtitle.textContent;

	// Change image logo dinamically
	const images = ["img/codigo.png", "img/programacion.png"]; // Rutas de las imágenes del logo
	const logo = document.getElementById("logo-img");
	let index = 0;

	setInterval(function () {
		logo.src = images[index];
		index = (index + 1) % images.length;
	}, 3000);

	// let ind = 0;
	// const logoFooter = document.getElementById("logo-img-footer");

	// setInterval(function () {
	// 	logoFooter.src = images[index];
	// 	ind = (ind + 1) % images.length;
	// }, 3000);

	// typewriter effect
	function typeWriterEffect(phrases) {
		subtitle.textContent = "";

		let currentIndex = 0;

		function type() {
			const text = phrases[currentIndex];
			let i = 0;

			function typeCharacter() {
				if (i < text.length) {
					subtitle.textContent += text.charAt(i);
					i++;
					setTimeout(typeCharacter, 100); // Velocidad de escritura en milisegundos
				} else {
					setTimeout(erase, 2000); // Tiempo de espera antes de borrar
				}
			}

			typeCharacter();
		}

		function erase() {
			const text = phrases[currentIndex];
			let i = text.length - 1;

			function eraseCharacter() {
				if (i >= 0) {
					subtitle.textContent = text.substring(0, i);
					i--;
					setTimeout(eraseCharacter, 50); // Velocidad de borrado en milisegundos
				} else {
					currentIndex = (currentIndex + 1) % phrases.length; // Avanzar al siguiente índice
					setTimeout(type, 1000); // Tiempo de espera antes de empezar la próxima frase
				}
			}

			eraseCharacter();
		}

		type();
	}

	const phrases = [
		"I build websites and web applications👷‍♂️",
		"Full-Stack Web Developer💻",
		"Welcome to my portfolio💼",
	];

	typeWriterEffect(phrases); // Iniciar el efecto
});

const logo = document.getElementById("logo");
let index = 0;

logo.addEventListener("click", () => {
	const phrases = [
		'"I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck"',
		'"You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. – John Romero"',
		'"Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman"',
		'"Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler"',
		'"If we want users to like our software, we should design it to behave like a likable person."  – Alan Cooper',
		'"Code is like humor. When you have to explain it, it’s bad." – Cory House',
		'"Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth"',
		'"Confusion is part of programming. ― Felienne Hermans"',
		'"Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel"',
		'"When I wrote this code, only God and I understood what I did. Now only God knows."  – Anonymous',
		'"You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity." – John Romero',
		'"Software and cathedrals are much the same — first we build them, then we pray."',
	];

	if (index < phrases.length) {
		Swal.fire({
			title: phrases[index],
			confirmButtonColor: "rgb(13,202,240)",
		});
		index++;
	} else {
		index = 0;
	}
});

document.addEventListener("DOMContentLoaded", function () {});
