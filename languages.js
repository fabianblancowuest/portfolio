const languagesTexts = {
	en: {
		nav: {
			cvLink: "CV",
			aboutMeLink: "About me",
			projectsLink: "Projects",
			contactLink: "Contact",
		},
		hi: "Hi, I'm Fabián Blanco Wuest",
		subtitleMobile: "I build websites and web applications 💻😄.",
		aboutMe: "Meet Fabián Blanco Wuest",
		presentation: [
			`I am a passionate developer based in Argentina, who began his career in the world of front-end development. Over time, I have expanded my skills and now specialize in developing client/server applications using the MERN and PERN stacks. My goal is to contribute to innovative and challenging projects that not only enrich my professional experience, but also mark a significant milestone in my career.`,
			`Below you will find a selection of my most recent projects. Each one of them reflects my dedication, creativity and technical skills. If something you see catches your attention or if you have any collaboration proposals, do not hesitate to contact me. I am always open to new opportunities and challenges.`,
		],
		webDevelopment: "Web Development",
		webDevelopmentDescription:
			"Full Stack Developer with training in JavaScript, ReactJS, Node.js, Java, Express, CSS, HTML, MongoDB, Postgre SQL and Sequelize, specialized in Front-end. Knowledge of agile methodologies, GIT, UX, UI, data structure, algorithms.",
		education: "Education",
		educationDescription: `I hold a degree in Technological Specialization in Software Development and have completed rigorous bootcamps including "Henry," "Egg Cooperation," and "Free Code Camp," among others. Additionally, I am currently pursuing a Bachelor's Degree in Systems at the National Technological University.`,
		projects: "My projects",
		projectsInfo: "Here are some of the projects I have recently created...",
		letsTalk: `Let's Talk!`,
		contactPhrase:
			"Contact me to start your web development project and I will make your vision come true.",
		contactBtn: `Contact `,
		footerPhrase: `I learn and make every day.
            Let's make a project together.`,
		btnProjects: `See more projects `,
	},
	es: {
		nav: {
			cvLink: "CV",
			aboutMeLink: "Acerca de",
			projectsLink: "Proyectos",
			contactLink: "Contacto",
		},
		hi: "Hola, soy Fabián Blanco Wuest",
		subtitleMobile: "Construyo sitios web y aplicaciones web. 💻😄",
		aboutMe: "Conoce a Fabián Blanco Wuest",
		presentation: [
			`Soy un apasionado desarrollador radicado en Argentina, que comenzó su carrera en el mundo del desarrollo front-end. Con el tiempo, amplié mis habilidades y ahora me especializo en el desarrollo de aplicaciones cliente/servidor utilizando las pilas MERN y PERN. Mi objetivo es contribuir a proyectos innovadores y desafiantes que no sólo enriquezcan mi experiencia profesional, sino que también marquen un hito significativo en mi carrera.`,
			` A continuación encontrarás una selección de mis proyectos más recientes. Cada uno de ellos refleja mi dedicación, creatividad y habilidades técnicas. Si algo que ves te llama la atención o si tienes alguna propuesta de colaboración, no dudes en contactar conmigo. Siempre estoy abierto a nuevas oportunidades y desafíos.`,
		],
		webDevelopment: "Desarrollo Web",
		webDevelopmentDescription: `Desarrollador Full Stack con formación en JavaScript, ReactJS, Node.js, Java, Express, CSS, HTML, MongoDB, Postgre SQL y Sequelize, especializado en Front-end. Conocimiento de metodologías ágiles, GIT, UX, UI, estructura de datos, algoritmos.`,
		education: "Educación",
		educationDescription: `Soy graduado de una Especialización Técnica en Desarrollo de Software y he completado rigurosos bootcamps tales como "Henry Bootcamp", "Egg Cooperación" y "Free Code Camp", entre otros. Adicionalmente, mi objetivo es seguir la Licenciatura en Sistemas en la Universidad Tecnológica Nacional.`,
		projects: "Mis proyectos",
		projectsInfo:
			"Estos son algunos de los proyectos que he creado recientemente...",
		letsTalk: "¡Hablemos!",
		contactPhrase:
			"Contáctame para iniciar tu proyecto de desarrollo web y haré realidad tu visión.",
		contactBtn: `Contacto `,
		footerPhrase: `Aprendo y creo todos los días.
        Hagamos un proyecto juntos.`,
		btnProjects: `Ver mas proyectos `,
	},
};

document.addEventListener("DOMContentLoaded", () => {
	const languageSelector = document.getElementById("language-selector");
	const aboutMe = document.querySelectorAll("#about-me-description p");
	const btnProjectsIco = document.getElementById("btn-projects-icon");
	const contactIco = document.getElementById("contact-icon");

	languageSelector.addEventListener("change", (event) => {
		const selectedLanguage = event.target.value;
		changeLanguage(selectedLanguage);
	});

	function changeLanguage(language) {
		document.getElementById("title").textContent = languagesTexts[language].hi;
		document.getElementById("subtitle-mobile").textContent =
			languagesTexts[language].subtitleMobile;
		// document.getElementById("subtitle").textContent =
		// 	languagesTexts[language].subtitle;
		document.getElementById("about-me-title").textContent =
			languagesTexts[language].aboutMe;
		for (let i = 0; i < aboutMe.length; i++) {
			aboutMe[i].textContent = languagesTexts[language].presentation[i];
		}
		document.getElementById("web-development-title").textContent =
			languagesTexts[language].webDevelopment;
		document.getElementById("web-development-description").textContent =
			languagesTexts[language].webDevelopmentDescription;
		document.getElementById("education-title").textContent =
			languagesTexts[language].education;
		document.getElementById("education-description").textContent =
			languagesTexts[language].educationDescription;
		document.getElementById("projects-title").textContent =
			languagesTexts[language].projects;
		document.getElementById("projects-description").textContent =
			languagesTexts[language].projectsInfo;
		document.getElementById("lets-talk").textContent =
			languagesTexts[language].letsTalk;
		document.getElementById("contact-me").textContent =
			languagesTexts[language].contactPhrase;
		document.getElementById("contact-btn").textContent =
			languagesTexts[language].contactBtn;
		document.getElementById("footer-text").textContent =
			languagesTexts[language].footerPhrase;
		document.getElementById("btn-projects").textContent =
			languagesTexts[language].btnProjects;
		document.getElementById("btn-projects").appendChild(btnProjectsIco);
		document.getElementById("contact-btn").appendChild(contactIco);
		document.getElementById("cv-link").textContent =
			languagesTexts[language].nav.cvLink;
		document.getElementById("about-me-link").textContent =
			languagesTexts[language].nav.aboutMeLink;
		document.getElementById("projects-link").textContent =
			languagesTexts[language].nav.projectsLink;
		document.getElementById("contact-link").textContent =
			languagesTexts[language].nav.contactLink;
	}

	// Establece el idioma inicial
	changeLanguage(languageSelector.value);
	console.log("select language");
	console.log(btnProjectsIco);
	console.log(navLinks);
});
