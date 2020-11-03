/* eslint-disable camelcase */
//Wait for page to finish loading
$(() => {
    //Add Event listener to booking button 
    $(".bookingBtn").on("click", function() {
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.host_id = $(this).data("id");
        localStorage.setItem("userData",JSON.stringify(userData));
    });

    //Add event listener to submit booking buttoon
    $("form.booking").on("submit", $("#submitBooking-btn"), getSeekerInfo);
  
    //Get seeker info 
    function getSeekerInfo(event) {
        event.preventDefault();

        //get userData from localStorage
        const seekerSearchInfo = JSON.parse(localStorage.getItem("userData"));

        //Set seeker info obj
        const seekerInfo = {
            host_id: seekerSearchInfo.host_id,
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
        //Call senderSeerkerInfo function
        sendSeekerInfo(seekerInfo);
    }
    
    function hostUnavailable(seekerInfo) {
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
            })
            .then(() => {
                localStorage.clear();
            // window.location.href = "/";
            })
            .catch((err) => {
                console.log((err.responseJSON));
            });
    }
});