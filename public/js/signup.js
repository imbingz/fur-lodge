//Wait for the page to load before running jQurey
$(document).ready(function() {
	//getting reference to the form and input
	const signUpForm = $('form.signup');
	const emailInput = $('input#email-input');
	const passwordInput = $('input#password-input');

	//Validate email and password are not blank when signup button is clicked
	signUpForm.on('submit', function(event) {
		event.preventDefault();
		const userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
		};

		//early return if no userEmail or userPassword
		if (!userData.email || !userData.password) return;

		//run signUpUser Function if there is an email and password input
		signUpUser(userData.email, userData.password);

		//Empty email and password input field after signUpUser
		emailInput.val('');
		passwordInput.val('');
  });
  
  //Make a POST request to the route if successful, then we will be redirected to the Member page. 
  // Otherwise log errors
  function signUpUser(email, password) {
    $.post('/api/signup', {
      email,
      password
    })
      .then((data) => {
        window.location.replace('/members');
      })
      .catch(handleLoginErr);
  }

	function handleLoginErr(err) {
		$('#alert .msg').text(err.responseJSON);
		//How long the alert will turn to opaque
		$("#alert").fadeIn(500)
	}


}); // ==> end
