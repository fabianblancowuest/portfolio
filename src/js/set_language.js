import { changeLanguage } from "./change_language.js";

document.addEventListener("DOMContentLoaded", () => {
	const languageSelector = document.getElementById("language-selector");

	const html = document.querySelector("html");

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
		// Change language atributte
		html.lang = selectedLanguage;
		console.log(html.lang);
		if (html.lang === "en") {
			languageSelector.title = "Change language to spanish";
		} else {
			languageSelector.title = "Cambiar al idioma inglés";
		}
	});

	// Establece el idioma inicial

	changeLanguage(languageSelector.value);

	console.log("select language");
});
