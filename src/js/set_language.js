import { changeLanguage } from "./change_language.js";

export const languageSelector = document.getElementById("language-selector");

document.addEventListener("DOMContentLoaded", () => {
	const html = document.querySelector("html");
	const idiomaNavegador = navigator.language;

	const cambiarIdioma = () => {
		if (idiomaNavegador.includes("es")) {
			console.log("Esta en español");
			return "es";
		} else {
			console.log("Está en otro idioma");
			return "en";
		}
	};

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
		// Change language atributte
		html.lang = selectedLanguage;
		console.log(html.lang);
		showLanguageMode.textContent = languageSelector.value.toUpperCase();

		if (idiomaNavegador.includes("es")) {
			languageSelector.title = "Cambiar idioma";
		} else {
			languageSelector.title = "Change language";
		}
	});

	console.log("idioma navegador", idiomaNavegador.slice(0, 2));

	document.getElementById("detected-language-text-short").textContent =
		idiomaNavegador;

	// Esto cambia el value del <select> del nav
	languageSelector.value = cambiarIdioma();

	// Ahora le pasamos el idioma detectado a la función
	changeLanguage(cambiarIdioma());

	const showLanguageMode = document.getElementById("language");
	// Establece el valor del span de idioma en el footer
	showLanguageMode.textContent = cambiarIdioma().toUpperCase();

	// Fecha y hora en el nav
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	};

	function updateDateTime() {
		document.getElementById("date").textContent = new Date().toLocaleString(
			languageSelector.value,
			options,
		);
	}

	updateDateTime();
	setInterval(updateDateTime, 1000);
});
