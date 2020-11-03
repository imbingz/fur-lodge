/* eslint-disable camelcase */
//Wait for page to finish loading
$(() => {

    // $.param() ===> ?city=salt lake&is_pup=0&is_cat=1&short_term=1&long_term=0&samll=1&med=1&pet_amt=2&large=0&giant=0

    // window.onload = function() {
    //     console.log("urlString", urlString);
    //     try {
    //         const urlString = (window.location.href).toLowerCase;
    //         const url = new URL(urlString);
    //         const city = url.searchParams.get("city");
    //         const is_pup = url.searchParams.get("is_pup");
    //         const is_cat = url.searchParams.get("is_cat");
    //         const pet_amt = url.searchParams.get("pet_amt");
    //         const short_term = url.searchParams.get("short_term");
    //         const long_term = url.searchParams.get("long_term");
    //         const small = url.searchParams.get("small");
    //         const med = url.searchParams.get("med");
    //         const large = url.searchParams.get("large");
    //         const giant = url.searchParams.get("giant");
    //         console.log("city is:", city);  
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };


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
        console.log("seekerInfo from booking modal", seekerInfo);
        //ajax call
    }
});