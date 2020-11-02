/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load

$(() => {

    // When the change submit Button is clicked, send changes to PUT request.
    $("#submit-btn").click(dosomething); 
    function dosomething(event) {
        event.preventDefault();
        console.log("submit button");
        console.log(($(this).data("host")));
        
    }

});