import emailjs from "@emailjs/browser";

emailjs.init("iD8pkZpwRpExO651W");

window.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("contact-form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		emailjs
			.sendForm("service_hre43nq", "template_it5kkwt", form)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				form.reset();

				const modalElement = document.getElementById("contactModal");
				const modal = bootstrap.Modal.getInstance(modalElement);
				modal?.hide();
			})
			.catch((error) => {
				console.error("FAILED...", error);
			});
	});
});

// emailjs.sendForm("service_hre43nq", "template_it5kkwt", this).then(
// publicKey: "iD8pkZpwRpExO651W",
