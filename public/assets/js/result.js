/* eslint-disable camelcase */
//Wait for page to finish loading
$(() => {

    $(".bookingBtn").on("click", function(event) {
        console.log($(this).data("id"));
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.host_id = $(this).data("id");
        localStorage.setItem("userData",JSON.stringify(userData));
    });

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
            city: seekerSearchInfo.city,
            pet_amt: seekerSearchInfo.pet_amt,
            rate: seekerSearchInfo.rate,
            is_pup: seekerSearchInfo.is_pup,
            is_cat: seekerSearchInfo.is_cat,
            small: seekerSearchInfo.small,
            med: seekerSearchInfo.med,
            large: seekerSearchInfo.large,
            giant: seekerSearchInfo.giant
        };
        
        sendSeekerInfo(seekerInfo);
    }

    function hostUnavailable(seekerInfo) {
        console.log("hello");
        return $.ajax({
            url: "/api/host",
            type: "PUT",
            data: {host_id: seekerInfo.host_id, available: false},
            success: function(data) {
                console.log("success", data);   
            }
        });
    }

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