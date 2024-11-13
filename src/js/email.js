(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init({
		publicKey: "iD8pkZpwRpExO651W",
	});
})();

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			// these IDs from the previous steps
			emailjs.sendForm("service_hre43nq", "template_it5kkwt", this).then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					// Restart form fields
					document.getElementById("contact-form").reset();

					var modalElement = document.getElementById("contactModal");
					var modal = bootstrap.Modal.getInstance(modalElement);
					// Close form
					modal.hide();
				},
				(error) => {
					console.log("FAILED...", error);
				},
			);
		});
};
