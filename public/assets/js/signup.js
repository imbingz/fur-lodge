//Wait for the document to load 
// eslint-disable-next-line prefer-arrow-callback
$(() => {
    //Get reference of elements
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
    const comfirmedPassword = $("input#confirm-password");

    //Add event listening to SIGNUP Button, get Host info and send a POST request
    // eslint-disable-next-line prefer-arrow-callback
    $("form.signup").on("submit", (event) => {
        //Prevent page reload when submitting form 
        event.preventDefault();
        
        //Check if password and confirmed password match
        if (passwordInput.val() !== comfirmedPassword.val()) {
            alert("\nPassword did not match: Please try again...");
            return; 
        }
      
        //Get host signup email and password
        const hostData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        // ********* Delete later 
        console.log(hostData);
        
        //Validate email, password are not blank
        if (!hostData.email || !hostData.password) {
            return;
        } 
        
        //Call signupHost if there are valid email and password
        signupHost(hostData.email, hostData.password);
      
        //Empty input fields
        emailInput.val("");
        passwordInput.val("");
    });
    
    //A POST request sending the host Signup Email, Password to Route handler
    function signupHost(email, password) {
        $.post("api/signup", {
            email,
            password
        }).then(() => {
        // ****** Maybe have to change later 
            window.location.replace("/profile");
        }).catch(err => { alert(err.responseJSON); });
    }
  
}); //========> END 