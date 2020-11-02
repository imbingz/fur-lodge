/* eslint-disable camelcase */
//Wait for page to finish loading
$(() => {
    //Add event listener 
    $("form.booking").on("submit", $("#submitBooking-btn"), getSeekerInfo);
  
    //Get seeker info 
    function getSeekerInfo(event) {
        event.preventDefault();
        console.log("booking submit");
        const seekerInfo = {
            first_name: $("#first-name").val().trim(),
            last_name: $("#last-name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
        };
      
        sendSeekerInfo(seekerInfo);
    }

    function sendSeekerInfo(seekerInfo) {
        console.log(seekerInfo);
        //ajax call
    }
});