
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load
$(() => {
    // eslint-disable-next-line prefer-arrow-callback
    $("form.login").on("submit", (event) => {
        //Prevent page reload when submitting form
        event.preventDefault();

        //Check email and password fields and make sure they are not empty when the form is submitted
        if (email && password) {
        //Get hostData obj
            const hostData = {
                email: $("#email").val().trim(),
                password: $("#password").val().trim()
            };

            const {email, password} = hostData;

            //Call loginHost function 
            loginHost(email, password);

            //Empty input fields
            $("#email").val("");
            $("#password").val("");
        } else {
        	alert("You must enter a user name and password.");
        }
    });

    //A GET request checking the host Signup Email, Password 
    function loginHost(email, password) {
        $.get("api/host/", {
            email,
            password
        })
            .then((data) => {
                // ****** Maybe have to change later
                window.location.replace("/profile");
                // console.log(data);   
            })
            .catch((err) => {
                console.log((err.responseJSON));
            });
    }
}); //========> END