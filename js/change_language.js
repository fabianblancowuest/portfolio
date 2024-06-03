document.addEventListener("DOMContentLoaded", () => {
	const languageSelector = document.getElementById("language-selector");
	const aboutMe = document.querySelectorAll("#about-me-description p");
	const btnProjectsIco = document.getElementById("btn-projects-icon");
	const contactIco = document.getElementById("contact-icon");
	const html = document.querySelector("html");

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
		// Change language atributte
		html.lang = selectedLanguage;
		console.log(html.lang);
	});

	async function loadJSON(file) {
		const response = await fetch(file);
		return await response.json();
	}

	let typingTimeout;
	let erasingTimeout;
	let waitingTimeout;

	function typeWriterEffect(phrases) {
		// Limpiar cualquier ejecución previa
		clearTimeout(typingTimeout);
		clearTimeout(erasingTimeout);
		clearTimeout(waitingTimeout);
		subtitle.textContent = "";

		const selectedPhrases = phrases;
		let currentIndex = 0;

		function type() {
			const text = selectedPhrases[currentIndex];
			let i = 0;

			function typeCharacter() {
				if (i < text.length) {
					subtitle.textContent += text.charAt(i);
					i++;
					typingTimeout = setTimeout(typeCharacter, 100); // Velocidad de escritura en milisegundos
				} else {
					waitingTimeout = setTimeout(erase, 2000); // Tiempo de espera antes de borrar
				}
			}

			typeCharacter();
		}

		function erase() {
			const text = selectedPhrases[currentIndex];
			let i = text.length - 1;

			function eraseCharacter() {
				if (i >= 0) {
					subtitle.textContent = text.substring(0, i);
					i--;
					erasingTimeout = setTimeout(eraseCharacter, 50); // Velocidad de borrado en milisegundos
				} else {
					currentIndex = (currentIndex + 1) % selectedPhrases.length; // Avanzar al siguiente índice
					waitingTimeout = setTimeout(type, 1000); // Tiempo de espera antes de empezar la próxima frase
				}
			}

			eraseCharacter();
		}

		type();
	}

	async function changeLanguage(language) {
		const languageTexts = await loadJSON(`/languages/site-${language}.json`);
		const cvTexts = await loadJSON(`/languages/cv-${language}.json`);

		typeWriterEffect(languageTexts.phrases);

		document.getElementById("title").textContent = languageTexts.hi;
		document.getElementById("subtitle-mobile").textContent =
			languageTexts.subtitleMobile;
		document.getElementById("about-me-title").textContent =
			languageTexts.aboutMe;
		for (let i = 0; i < aboutMe.length; i++) {
			aboutMe[i].textContent = languageTexts.presentation[i];
		}
		document.getElementById("web-development-title").textContent =
			languageTexts.webDevelopment;
		document.getElementById("web-development-description").textContent =
			languageTexts.webDevelopmentDescription;
		document.getElementById("education-title").textContent =
			languageTexts.education;
		document.getElementById("education-description").textContent =
			languageTexts.educationDescription;
		document.getElementById("projects-title").textContent =
			languageTexts.projects;
		document.getElementById("projects-description").textContent =
			languageTexts.projectsInfo;
		document.getElementById("lets-talk").textContent = languageTexts.letsTalk;
		document.getElementById("contact-me").textContent =
			languageTexts.contactPhrase;
		document.getElementById("contact-btn").textContent =
			languageTexts.contactBtn;
		const footerText = document.querySelectorAll("#footer-text span");

		for (let i = 0; i < footerText.length; i++) {
			footerText[i].textContent = languageTexts.footerPhrase[i];
		}
		document.getElementById("btn-projects").textContent =
			languageTexts.btnProjects;
		document.getElementById("btn-projects").appendChild(btnProjectsIco);
		document.getElementById("contact-btn").appendChild(contactIco);
		document.getElementById("cv-link").textContent = languageTexts.nav.cvLink;
		document.getElementById("about-me-link").textContent =
			languageTexts.nav.aboutMeLink;
		document.getElementById("projects-link").textContent =
			languageTexts.nav.projectsLink;
		document.getElementById("contact-link").textContent =
			languageTexts.nav.contactLink;

		const formLabels = document.querySelectorAll(".form-label");
		const formPlaceholders = document.querySelectorAll(
			".form-control[placeholder]",
		);

		formPlaceholders.forEach((item) => console.log(item));
		// Contact Form
		document.getElementById("contactModalLabel").textContent =
			languageTexts.contactFormTitle;

		for (let i = 0; i < formLabels.length; i++) {
			formLabels[i].textContent = languageTexts.contactForm[i];
		}
		for (let i = 0; i < formPlaceholders.length; i++) {
			formPlaceholders[i].placeholder = languageTexts.formPlaceHolders[i];
		}

		const btnFormIco = document.getElementById("btn-submit-ico");
		const btnSubmitForm = document.getElementById("btn-submit-form");

		btnSubmitForm.textContent = languageTexts.btnForm;
		console.log(btnFormIco);
		btnSubmitForm.appendChild(btnFormIco);

		// CV Language
		const smahhTasks = document.querySelectorAll("#cv-smahh-tasks li");
		const rymTasks = document.querySelectorAll("#cv-rym-tasks li");
		const mpcTasks = document.querySelectorAll("#cv-mpc-tasks li");
		const techUsedTitle = document.getElementsByClassName("cv-techs-used");
		const cvProjectLinks = document.querySelectorAll(".cv-project-links a");
		const sectionTitles = document.getElementsByClassName("section-subtitle");
		const downloadCvIco = document.getElementById("download-cv-ico");
		const closeCvIco = document.getElementById("close-cv-ico");
		const technologies = document.getElementsByClassName("technology-text");

		document.getElementById("cv-info").textContent = cvTexts.cvInfo;

		for (let i = 0; i < sectionTitles.length; i++) {
			sectionTitles[i].textContent = cvTexts.sectionTitle[i];
		}
		document.getElementById("cv-smahh-description").textContent = cvTexts;
		for (let i = 0; i < smahhTasks.length; i++) {
			smahhTasks[i].textContent = cvTexts.smahhTasks[i];
		}

		for (let i = 0; i < techUsedTitle.length; i++) {
			techUsedTitle[i].textContent = cvTexts.techs;
			document.getElementById("cv-rym-description").textContent = cvTexts.rym;
		}

		for (let i = 0; i < rymTasks.length; i++) {
			rymTasks[i].textContent = cvTexts.rymTasks[i];
		}
		document.getElementById("cv-mpc-description").textContent = cvTexts.mpc;

		for (let i = 0; i < techUsedTitle.length; i++) {
			techUsedTitle[i].textContent = cvTexts.techsUsed;
		}

		for (let i = 0; i < mpcTasks.length; i++) {
			mpcTasks[i].textContent = cvTexts.mpcTasks[i];
		}

		for (let i = 0; i < cvProjectLinks.length; i++) {
			for (let j = 0; j < cvProjectLinks[i].length; j++) {
				cvProjectLinks[j].textContent = cvTexts.cvProjectLinks[j];
			}
		}

		for (let i = 0; i < technologies.length; i++) {
			technologies[i].textContent = cvTexts.technologies[i] + ":";
		}

		const educationsItems = document.querySelectorAll(
			"#cv-education-skills li",
		);

		const complementaryEducationsItems = document.querySelectorAll(
			"#cv-complementary-education li",
		);

		for (let i = 0; i < educationsItems.length; i++) {
			educationsItems[i].textContent = cvTexts.professionalEducation[i];
		}

		for (let i = 0; i < complementaryEducationsItems.length; i++) {
			complementaryEducationsItems[i].textContent =
				cvTexts.complementaryEducation[i];
		}
		document.getElementById("btn-download-cv").textContent =
			cvTexts.btnDownload;
		document.getElementById("btn-download-cv").appendChild(downloadCvIco);
		console.log(downloadCvIco);
		document.getElementById("btn-close-cv").textContent = cvTexts.btnClose;

		document.getElementById("btn-close-cv").appendChild(closeCvIco);
		console.log(closeCvIco);
		const dbText = document.getElementsByClassName("database-text");
		const cvLanguages = document.querySelectorAll("#cv-languages li");
		for (let i = 0; i < dbText.length; i++) {
			dbText[i].textContent = cvTexts.textDatabase + ":";
		}
		for (let i = 0; i < cvLanguages.length; i++) {
			cvLanguages[i].textContent = cvTexts.languages[i];
		}

		// to download cv depending on the language
		const downloadCVRoute = document.getElementById("link-download-cv");
		downloadCVRoute.href = `./docs/CV-fabian-blanco-wuest-${language}.pdf`;
		downloadCVRoute.download = `CV-fabian-blanco-wuest-${language}.pdf`;
	}
	// Establece el idioma inicial

	changeLanguage(languageSelector.value);
	console.log("select language");
});
