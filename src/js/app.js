document.addEventListener("DOMContentLoaded", function () {
	let isDarkMode = false;

	// Change image logo dinamically
	// const images = ["img/icons/codigo.png", "img/icons/click-here.png"]; // Rutas de las imágenes del logo
	// let index = 0;

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

	const htmlLanguage = document.querySelector("html");
	const logoImg = document.getElementById("logo-img");
	const logoImgFooter = document.getElementById("logo-img-footer");
	const logo = document.getElementById("logo");
	const selectLanguage = document.getElementById("select-language");
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
	const buttons = document.getElementsByClassName("btn");
	const linesProjectCv = document.getElementsByClassName("line-project");
	const imgInProgress = document.getElementById("img-in-progress");
	const formsLabels = document.getElementsByClassName("form-label");
	const icon = document.querySelector("#btn-toggle i");
	const button = document.getElementById("btn-toggle");
	const overlayItems = document.getElementsByClassName("overlay");

	// Inicio del array que devuelve las frases del archivo programming-phrases.json
	let index = 0;

	logo.addEventListener("click", () => {
		fetch("/src/languages/programming-phrases.json")
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

	function focusSelect() {
		// document.getElementById("language-selector").focus();
		// document.getElementById("language-selector").click();
		// console.log(document.getElementById("language-selector"));
		// console.log("Hiciste click en select language");

		const selectElement = document.getElementById("language-selector");
		selectElement.focus();
		// Usar un temporizador para asegurarse de que el focus ocurra antes del click
		setTimeout(() => {
			const event = new MouseEvent("mousedown", {
				view: window,
				bubbles: true,
				cancelable: true,
			});
			selectElement.dispatchEvent(event);
		}, 0);
	}

	selectLanguage.addEventListener("click", focusSelect);

	document.getElementById("btn-toggle").addEventListener("click", () => {
		isDarkMode = !isDarkMode;
		isDarkMode
			? (showMode.textContent = "Theme: Dark")
			: (showMode.textContent = "Theme: Light");

		// cambio de icono de la nav bar
		isDarkMode
			? (logoImg.src = "/src/assets/img/icons/codigo3.png")
			: (logoImg.src = "/src/assets/img/icons/codigo2.png");

		// cambio de ícono del footer
		isDarkMode
			? (logoImgFooter.src = "/src/assets/img/icons/codigo3.png")
			: null;

		isDarkMode
			? (selectLanguage.textContent.style.color = "#C7C8C9")
			: (selectLanguage.textContent.style.color = "initial");

		navbar.classList.toggle("dark-nav-bar");
		barBtn.classList.toggle("dark-btn-bars");
		barBtnIcon.classList.toggle("dark-btn-bars");

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

		for (let i = 0; i < overlayItems.length; i++) {
			overlayItems[i].classList.toggle("dark-mode-white-text");
		}

		// Texts from form contact
		for (let i = 0; i < formsLabels.length; i++) {
			formsLabels[i].classList.toggle("dark-mode-white-text");
		}

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
});
