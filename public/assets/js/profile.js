/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load
$(() => {
 
    // When the editProfile Button is clicked, we validate 
    $("#editProfile-btn").on("click", function (event) {
        event.preventDefault();
        console.log("button clicked");
      
        const hostData = $(this).data("host");
        console.log(hostData);
      

        // If we have an email and password we run the loginUser function and clear the form
        // loginUser(userData.email, userData.password);
        // emailInput.val("");
        // passwordInput.val("");
    });

    // // loginUser does a post to our "api/login" route and if successful, redirects us the the profile page
    // function loginUser(email, password) {
    //     $.post("/api/login", {
    //         email: email,
    //         password: password,
    //     })
    //         .then(() => {
    //             window.location.href = "/profile";
    //             // If there's an error, log the error
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
});
