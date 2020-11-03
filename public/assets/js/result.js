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


    $(".bookingBtn").on("click", function(event) {
        console.log($(this).data("id"));
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.host_id = $(this).data("id");
        localStorage.setItem("userData",JSON.stringify(userData));
    })

    //Add event listener 
    $("form.booking").on("submit", $("#submitBooking-btn"), getSeekerInfo);
  
    //Get seeker info 
    function getSeekerInfo(event) {
        event.preventDefault();
        console.log("booking submit");
        const seekerSearchInfo = JSON.parse(localStorage.getItem("userData"));
        //NEED TO ADD RATE TO SEARCH FORM! ADDING LINE BELOW TO DEFAULT TO $20;
        seekerSearchInfo.rate = 20;
        const seekerInfo = {

            first_name: $("#first-name").val().trim(),
            last_name: $("#last-name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
            /*eslint-disable */
            ...seekerSearchInfo
            /*eslint-enable */
        };
      
        sendSeekerInfo(seekerInfo);
    }

    function hostUnavailable(seekerInfo) {
        console.log("hello");
        return $.ajax({
            url: '/api/host',
            type: 'PUT',
            data: {host_id: seekerInfo.host_id, available: false},
            success: function(data) {
            }
          });
    };

    function sendSeekerInfo(seekerInfo) {
        console.log("seekerInfo from booking modal", seekerInfo);
        //ajax call
        $.post("/booking",seekerInfo)
        .then((data) => {
            hostUnavailable(seekerInfo);
        }).then(() => {
            localStorage.clear();
            // window.location.href = "/";
        })
        .catch((err) => {
            console.log((err.responseJSON));
        });
    }
});