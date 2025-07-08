import { changeLanguage } from "./change_language.js";

export const languageSelector = document.getElementById("language-selector");

document.addEventListener("DOMContentLoaded", () => {
	const html = document.querySelector("html");
	const idiomaNavegador = navigator.language;

	console.log(navigator.language);

	const cambiarIdioma = () => {
		if (idiomaNavegador.includes("es")) {
			console.log("Esta en español");
			return "es";
		} else {
			console.log("Está en otro idioma");
			return "en";
		}
	};

	console.log(languageSelector[0].textContent);

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
		// Change language atributte
		html.lang = selectedLanguage;
		console.log(html.lang);
		if (idiomaNavegador.includes("es")) {
			languageSelector.title = "Cambiar idioma";
		} else {
			languageSelector.title = "Change language";
		}
	});

	console.log("idioma navegador", idiomaNavegador.slice(0, 2));

	document.getElementById("detected-language-text-short").textContent =
		idiomaNavegador;

	// Establece el idioma inicial

	// changeLanguage(languageSelector.value);
	languageSelector.value = cambiarIdioma(); // Esto cambia el value del <select>

	changeLanguage(cambiarIdioma());

	// console.log("select language");
});
