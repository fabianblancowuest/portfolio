let isDarkMode = false;

document.addEventListener("DOMContentLoaded", function () {
	// Animación para que vayan apareciendo los elementos mediante el scroll
	const elements = document.querySelectorAll(".appear");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
				}
			});
		},
		{
			threshold: 0.1, // Ajusta este valor según sea necesario
		},
	);

	elements.forEach((element) => {
		observer.observe(element);
	});

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
	const languageSelector = document.getElementById("language-selector");
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
	// const imgInProgress = document.getElementById("img-in-progress");
	const formsLabels = document.getElementsByClassName("form-label");
	const icon = document.querySelector("#btn-toggle i");
	const button = document.getElementById("btn-toggle");
	const overlayItems = document.getElementsByClassName("overlay");
	const aboutMeDescription = document.getElementById("about-me-description");
	const techImages = document.getElementById("hero-inferior-image-container");

	const sectionsSubtitle = document.getElementsByClassName("section-subtitle");

	// Botón para menú de móviles
	const btnMenu = document.getElementById("btn-menu");

	// aboutMeDescription.addEventListener("pointerover", () => {
	// 	techImages.style.flexDirection = "row-reverse";
	// });

	// aboutMeDescription.addEventListener("pointerout", () => {
	// 	techImages.style.flexDirection = "";
	// });

	// Botón para mostrar íconos de redes sociales
	btnMenu.addEventListener("click", () => {
		document
			.getElementById("social-media-pre-nav")
			.classList.toggle("show-icons");
	});

	console.log(btnMenu);
	// Inicio del array que devuelve las frases del archivo programming-phrases.json
	let index = 0;

	// Frases de programadores con Sweet Alert
	logo.addEventListener("click", () => {
		fetch("/src/languages/programming-phrases.json")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const phrases = data.phrases[languageSelector.value.slice(0, 2)];
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

	// Se dispara este evento haciendo clic en el botón de modo oscuro
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
			? (logoImgFooter.src = "/src/assets/img/icons/codigo3.png")
			: null;

		isDarkMode
			? (languageSelector.style.backgroundImage =
					"url(/src/assets/img/icons/globe-white.svg)")
			: (languageSelector.style.backgroundImage =
					"url(/src/assets/img/icons/globe.svg)");

		document
			.getElementsByClassName("active")[0]
			.classList.toggle("dark-mode-active");

		navbar.classList.toggle("dark-nav-bar");
		barBtn.classList.toggle("dark-btn-bars");
		barBtnIcon.classList.toggle("dark-btn-bars");

		// Change img in dark mode
		// sections[0].classList.contains("dark-mode")
		// 	? (imgInProgress.src = "/src/assets/img/folder/work-in-progress.png")
		// 	: (imgInProgress.src = "/src/assets/img/projects/work-in-progress.png");

		document
			.getElementById("contactModalLabel")
			.classList.toggle("dark-mode-white-text");

		document.getElementById("btn-download-cv").classList.toggle("btn-light");

		document
			.getElementById("language-selector")
			.classList.toggle("dark-mode-select");

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
		document.getElementById("btn-view-cv-i").classList.toggle("dark-mode-text");

		for (let i = 0; i < overlayItems.length; i++) {
			overlayItems[i].classList.toggle("dark-mode-white-text");
		}

		// Texts from form contact
		for (let i = 0; i < formsLabels.length; i++) {
			formsLabels[i].classList.toggle("dark-mode-white-text");
		}

		// CV sections subtitle
		for (let i = 0; i < sectionsSubtitle.length; i++) {
			sectionsSubtitle[i].classList.toggle("dark-mode-white-text");
		}

		for (let i = 0; i < sectionsSubtitle.length; i++) {
			sectionsSubtitle[i].classList.toggle("dark-mode-black-background");
		}

		const widthScreen_ = window.innerWidth;

		if (widthScreen_ < 768) {
			document
				.querySelector("#social-media-pre-nav")
				.classList.toggle("dark-nav-bar");
		}

		// Arrow nav
		// const scrollArrow = document.querySelector("#scroll-arrow i");
		// const section = document.querySelector(".contact");

		// window.addEventListener("scroll", () => {
		// 	const rect = section.getBoundingClientRect();
		// 	if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
		// 		// Si la sección es visible
		// 		scrollArrow.style.color = "white"; // Cambia el color
		// 	} else {
		// 		// Si no está en la sección
		// 		scrollArrow.style.color = "inherit";
		// 	}
		// });

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

export { isDarkMode };
