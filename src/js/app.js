const htmlLanguage = document.querySelector("html");

document.addEventListener("DOMContentLoaded", function () {
	// Change image logo dinamically
	// const images = ["img/icons/codigo.png", "img/icons/click-here.png"]; // Rutas de las imágenes del logo
	const logo = document.getElementById("logo-img");
	let index = 0;

	// setInterval(function () {
	// 	logo.src = images[index];
	// 	index = (index + 1) % images.length;
	// }, 3000);

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
	fetch("../languages/programming-phrases.json")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const phrases = data.phrases[htmlLanguage.lang];
			if (index < phrases.length) {
				// Sweet alert
				Swal.fire({
					title: phrases[index],
					confirmButtonColor: "rgb(13,202,240)",
					confirmButtonColorText: "red",
					customClass: isDarkMode ? "dark-mode-alert" : null,
				});
				index++;
			} else {
				index = 0;
			}
		})
		.catch((error) => console.log("Error fetching the JSON:", error));
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
const showMode = document.getElementById("show-mode");
let isDarkMode = false;

document.getElementById("btn-toggle").addEventListener("click", () => {
	isDarkMode = !isDarkMode;
	isDarkMode
		? (showMode.textContent = "Theme: Dark")
		: (showMode.textContent = "Theme: Light");
	navbar.classList.toggle("dark-nav-bar");
	barBtn.classList.toggle("dark-btn-bars");
	barBtnIcon.classList.toggle("dark-btn-bars");
	const buttons = document.getElementsByClassName("btn");
	const linesProjectCv = document.getElementsByClassName("line-project");
	const imgInProgress = document.getElementById("img-in-progress");

	// Change img in dark mode
	sections[0].classList.contains("dark-mode")
		? (imgInProgress.src = "/src/assets/img/folder/work-in-progress.png")
		: (imgInProgress.src = "/src/assets/img/projects/work-in-progress.png");

	document
		.getElementById("contactModalLabel")
		.classList.toggle("dark-mode-white-text");

	document.getElementById("btn-download-cv").classList.toggle("btn-light");

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

	for (let i = 0; i < modals.length; i++) {
		modals[i].classList.toggle("dark-mode");
	}
	document
		.getElementById("btn-download-cv-i")
		.classList.toggle("dark-mode-text");

	const overlayItems = document.getElementsByClassName("overlay");

	for (let i = 0; i < overlayItems.length; i++) {
		overlayItems[i].classList.toggle("dark-mode-white-text");
	}

	// Texts from form contact
	const formsLabels = document.getElementsByClassName("form-label");
	for (let i = 0; i < formsLabels.length; i++) {
		formsLabels[i].classList.toggle("dark-mode-white-text");
	}

	const icon = document.querySelector("#btn-toggle i");
	const button = document.getElementById("btn-toggle");

	if (icon.classList.contains("bi-moon-stars-fill")) {
		icon.classList.remove("bi-moon-stars-fill");
		icon.classList.add("bi-brightness-high-fill");
		button.classList.remove("icon-left"); // Elimina la clase que alinea el ícono a la izquierda
		button.classList.add("icon-right"); // Agrega la clase que alinea el ícono a la derecha
	} else {
		icon.classList.remove("bi-brightness-high-fill");
		icon.classList.add("bi-moon-stars-fill");
		button.classList.remove("icon-right"); // Elimina la clase que alinea el ícono a la derecha
		button.classList.add("icon-left"); // Agrega la clase que alinea el ícono a la izquierda
	}
});
