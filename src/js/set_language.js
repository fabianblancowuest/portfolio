import { changeLanguage } from "./change_language.js";

document.addEventListener("DOMContentLoaded", () => {
	const languageSelector = document.getElementById("language-selector");

	const html = document.querySelector("html");

	// Solo ejecuta si estamos en la raíz del sitio
	// Solo ejecuta si estamos en la raíz del sitio
	if (window.location.pathname === "/") {
		const idiomaGuardado = localStorage.getItem("idioma");

		if (!idiomaGuardado) {
			const idiomaNavegador = navigator.language.slice(0, 2); // "es", "en", etc.
			const idiomaSoportado = ["es", "en"].includes(idiomaNavegador)
				? idiomaNavegador
				: "en";

			// Guarda el idioma para que no vuelva a redirigir
			localStorage.setItem("idioma", idiomaSoportado);

			// Redirige a la versión correspondiente
			window.location.replace(`/${idiomaSoportado}`);
		} else {
			// Redirige al idioma previamente guardado
			window.location.replace(`/${idiomaGuardado}`);
		}
	}

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
		// Change language atributte
		html.lang = selectedLanguage;
		console.log(html.lang);
		if (html.lang === "en") {
			languageSelector.title = "Change language";
		} else {
			languageSelector.title = "Cambiar idioma";
		}
	});

	// Establece el idioma inicial

	changeLanguage(languageSelector.value);

	console.log("select language");
});
