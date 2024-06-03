document.addEventListener("DOMContentLoaded", function () {
	// Change image logo dinamically
	const images = ["img/icons/codigo.png", "img/folder/programacion.png"]; // Rutas de las imágenes del logo
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

const sections = document.getElementsByClassName("section");
const texts = document.getElementsByClassName("text");
const icons = document.getElementsByClassName("icon");
const modals = document.getElementsByClassName("modal-content");
const navLinks = document.getElementsByClassName("nav-link");
const navbar = document.getElementById("navbar");
const barBtn = document.getElementById("btn-bars");
const barBtnIcon = document.querySelector("#btn-bars span");
const darkSections = document.getElementsByClassName("dark-section");

document.getElementById("btn-toggle").addEventListener("click", () => {
	navbar.classList.toggle("dark-nav-bar");
	barBtn.classList.toggle("dark-btn-bars");
	barBtnIcon.classList.toggle("dark-btn-bars");
	const buttons = document.getElementsByClassName("btn");
	const linesProjectCv = document.getElementsByClassName("line-project");

	for (let i = 0; i < darkSections.length; i++) {
		darkSections[i].classList.toggle("dark-sections-mode");
	}

	for (let i = 0; i < sections.length; i++) {
		sections[i].classList.toggle("dark-mode");
	}
	for (let i = 0; i < texts.length; i++) {
		texts[i].classList.toggle("dark-mode-text");
	}
	for (let i = 0; i < icons.length; i++) {
		icons[i].classList.toggle("dark-icon-hover");
	}

	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].classList.toggle("dark-nav-link");
	}

	for (let i = 0; i < linesProjectCv.length; i++) {
		linesProjectCv[i].classList.toggle("dark-color-line-cv");
	}

	if (sections[0].classList.contains("dark-mode")) {
		for (let i = 0; i < modals.length; i++) {
			modals[i].classList.toggle("dark-mode");
		}
		document.getElementById("btn-download-cv-i").style.color = "white";
		// btn projects
		// document.getElementById("btn-projects").classList.toggle("dark-btn-mine");

		// for (let i = 0; i < buttons.length; i++) {
		// 	buttons[i].classList.toggle("dark-mode-btn-text");
		// }
		const overlayItems = document.getElementsByClassName("overlay");

		for (let i = 0; i < overlayItems.length; i++) {
			overlayItems[i].classList.toggle("dark-mode-overlay");
		}

		document.getElementById("btn-download-cv").classList.toggle("btn-light");

		// Texts from form contact
		const formsLabels = document.getElementsByClassName("form-label");
		for (let i = 0; i < formsLabels.length; i++) {
			formsLabels[i].style.color = "white";
		}
	} else {
		for (let i = 0; i < modals.length; i++) {
			modals[i].classList.toggle("dark-mode");
		}

		// Texts from form contact
		const formsLabels = document.getElementsByClassName("form-label");
		for (let i = 0; i < formsLabels.length; i++) {
			formsLabels[i].style.color = "initial";
		}

		document.getElementById("btn-download-cv-i").style.color = "initial";
	}

	const icon = document.querySelector("#btn-toggle i");
	const button = document.getElementById("btn-toggle");

	if (icon.classList.contains("bi-brightness-high")) {
		icon.classList.remove("bi-brightness-high");
		icon.classList.add("bi-brightness-high-fill");
		button.classList.remove("icon-left"); // Elimina la clase que alinea el ícono a la izquierda
		button.classList.add("icon-right"); // Agrega la clase que alinea el ícono a la derecha
	} else {
		icon.classList.remove("bi-brightness-high-fill");
		icon.classList.add("bi-brightness-high");
		button.classList.remove("icon-right"); // Elimina la clase que alinea el ícono a la derecha
		button.classList.add("icon-left"); // Agrega la clase que alinea el ícono a la izquierda
	}
});
