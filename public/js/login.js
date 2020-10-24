$(document).ready(function() {
	//Get element reference from form and input
	const loginForm = $('form.login');
	const emailInput = $('input#email-input');
	const passwordInput = $('input#password-input');

	//validate there is email and password entered when the form is submitted
	loginForm.on('submit', function(event) {
		event.preventDefault();

		const userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
		};

		if (!userData.email || !userData.password) return;

		loginUser(userData.email, userData.password);

		emailInput.val('');
		passwordInput.val('');
	});

	function loginUser(email, password) {
		$.post('/api/login', {
			email,
			password,
		})
			.then(() => window.location.replace('/members'))
			.catch(err => console.log(err));
	}
}); // ===> end
