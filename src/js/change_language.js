import { updateContentBasedOnScreenSize } from "./resize.js";
import { isDarkMode } from "./app.js";

// Content elements
const btnToggleTheme = document.getElementById("btn-toggle");
const aboutMe = document.querySelectorAll("#about-me-description p");
const btnProjectsIco = document.getElementById("btn-projects-icon");
const contactIco = document.getElementById("contact-icon");
const footerLinks = document.querySelectorAll(".footer-links-a li a");

// Modal elements
const smahhTasks = document.querySelectorAll("#cv-smahh-tasks li");
const rymTasks = document.querySelectorAll("#cv-rym-tasks li");
const mpcTasks = document.querySelectorAll("#cv-mpc-tasks li");
const simpsonsTasks = document.querySelectorAll("#cv-simpsons-tasks li");
const techUsedTitle = document.getElementsByClassName("cv-techs-used");
const cvProjectLinks = document.querySelectorAll(".cv-project-links a");
const sectionTitles = document.getElementsByClassName("section-subtitle");
const downloadCvIco = document.getElementById("download-cv-ico");
const viewCvIco = document.getElementById("view-cv-ico");
const closeCvIco = document.getElementById("close-cv-ico");
const technologies = document.getElementsByClassName("technology-text");
const btnFormIco = document.getElementById("btn-submit-ico");
const btnSubmitForm = document.getElementById("btn-submit-form");
const btnResumeIco = document.getElementById("resume-ico");

const dbText = document.getElementsByClassName("database-text");
const cvLanguages = document.querySelectorAll("#cv-languages li");

const showLanguageMode = document.getElementById("language");

// To consume data from any JSON file
async function loadJSON(file) {
	const response = await fetch(file);
	return await response.json();
}

let currentLanguageTexts;

// To change language
async function changeLanguage(language) {
	const languageTexts = await loadJSON(`/src/languages/site-${language}.json`);
	const cvTexts = await loadJSON(`/src/languages/cv-${language}.json`);
	currentLanguageTexts = languageTexts;

	showLanguageMode.textContent = document
		.querySelector("html")
		.lang.toUpperCase();

	updateContentBasedOnScreenSize(languageTexts);

	btnToggleTheme.title = languageTexts.nav.switchTheme;

	document.getElementById("title").textContent = languageTexts.hi;
	document.getElementById("about-me-title").textContent = languageTexts.aboutMe;
	for (let i = 0; i < aboutMe.length; i++) {
		aboutMe[i].textContent = languageTexts.presentation[i];
	}
	document.getElementById("experience-description").textContent =
		languageTexts.experience;
	document.getElementById("web-development-title").textContent =
		languageTexts.webDevelopment;
	document.getElementById("web-development-description").textContent =
		languageTexts.webDevelopmentDescription;
	document.getElementById("education-title").textContent =
		languageTexts.education;
	document.getElementById("education-description").textContent =
		languageTexts.educationDescription;
	document.getElementById("btn-experience").textContent =
		languageTexts.btnExperience;

	document.getElementById("btn-experience").appendChild(btnResumeIco);
	document.getElementById("projects-title").textContent =
		languageTexts.projects;
	document.getElementById("projects-description").textContent =
		languageTexts.projectsInfo;
	document.getElementById("lets-talk").textContent = languageTexts.letsTalk;
	document.getElementById("contact-me").textContent =
		languageTexts.contactPhrase;
	document.getElementById("contact-btn").textContent = languageTexts.contactBtn;
	const footerText = document.querySelectorAll("#footer-text span");

	for (let i = 0; i < footerText.length; i++) {
		footerText[i].textContent = languageTexts.footerPhrase[i];
	}
	document.getElementById("btn-projects").textContent =
		languageTexts.btnProjects;
	document.getElementById("btn-projects").appendChild(btnProjectsIco);
	document.getElementById("contact-btn").appendChild(contactIco);
	// document.getElementById("cv-link").textContent = languageTexts.nav.cvLink;
	document.getElementById("about-me-link").textContent =
		languageTexts.nav.aboutMeLink;
	document.getElementById("experience-link").textContent =
		languageTexts.nav.experienceLink;
	document.getElementById("projects-link").textContent =
		languageTexts.nav.projectsLink;
	document.getElementById("contact-link").textContent =
		languageTexts.nav.contactLink;

	for (let i = 0; i < footerLinks.length; i++) {
		footerLinks[i].textContent = languageTexts.footerLinks[i];
	}

	// Contact Form
	const formLabels = document.querySelectorAll(".form-label");
	const formPlaceholders = document.querySelectorAll(
		".form-control[placeholder]",
	);

	document.getElementById("contactModalLabel").textContent =
		languageTexts.contactFormTitle;

	for (let i = 0; i < formLabels.length; i++) {
		formLabels[i].textContent = languageTexts.contactForm[i];
	}
	for (let i = 0; i < formPlaceholders.length; i++) {
		formPlaceholders[i].placeholder = languageTexts.formPlaceHolders[i];
	}

	btnSubmitForm.textContent = languageTexts.btnForm;
	console.log(btnFormIco);
	btnSubmitForm.appendChild(btnFormIco);

	document.getElementById("cv-info").textContent = cvTexts.cvInfo;

	for (let i = 0; i < sectionTitles.length; i++) {
		sectionTitles[i].textContent = cvTexts.sectionTitle[i];
	}
	document.getElementById("cv-smahh-description").textContent = cvTexts.smahh;
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

	document.getElementById("cv-simpsons-description").textContent =
		cvTexts.theSimpsonsApp;

	for (let i = 0; i < simpsonsTasks.length; i++) {
		simpsonsTasks[i].textContent = cvTexts.theSimpsonsAppTasks[i];
	}

	for (let i = 0; i < cvProjectLinks.length; i++) {
		if (
			cvProjectLinks[i].textContent.charAt(0) === "W" ||
			cvProjectLinks[i].textContent.charAt(0) === "S"
		) {
			cvProjectLinks[i].textContent = cvTexts.cvProjectLinks[0];
		} else {
			cvProjectLinks[i].textContent = cvTexts.cvProjectLinks[1];
		}
	}

	for (let i = 0; i < technologies.length; i++) {
		technologies[i].textContent = cvTexts.technologies[i] + ":";
	}

	const educationsItems = document.querySelectorAll("#cv-education-skills li");

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
	document.getElementById("btn-download-cv").textContent = cvTexts.btnDownload;
	document.getElementById("btn-view-cv").textContent = cvTexts.btnView;
	document.getElementById("btn-download-cv").appendChild(downloadCvIco);

	document.getElementById("btn-view-cv").appendChild(viewCvIco);
	document.getElementById("btn-close-cv").textContent = cvTexts.btnClose;

	document.getElementById("btn-close-cv").appendChild(closeCvIco);

	for (let i = 0; i < dbText.length; i++) {
		dbText[i].textContent = cvTexts.textDatabase + ":";
	}
	for (let i = 0; i < cvLanguages.length; i++) {
		cvLanguages[i].textContent = cvTexts.languages[i];
	}

	// to download cv depending on the language
	const downloadCVRoute = document.getElementById("link-download-cv");
	downloadCVRoute.href = `../../docs/CV-fabian-blanco-wuest-${language}.pdf`;
	downloadCVRoute.download = `CV-fabian-blanco-wuest-${language}.pdf`;

	// to view cv depending on the language
	const viewCVRoute = document.getElementById("link-view-cv");
	viewCVRoute.href = `../../docs/CV-fabian-blanco-wuest-${language}.pdf`;
}

export { changeLanguage, currentLanguageTexts };
