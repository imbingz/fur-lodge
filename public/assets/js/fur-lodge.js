//// AJAX CALL to return hosts by search form submission.
// $.post("/api/host/search"); 

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load 



$(document).ready(() => { 

    $(document).on("submit", "#host-form", handleHostFormSubmit);
    //function to submit search from info 

    function handleHostFormSubmit(event) {
        event.preventDefault();

        // if (city &&  &&) {
        //     //Get hostData obj
        //         const hostData = {
        //             city: $("#city").val().trim(),
        //             is_pup: isDog ? isDog : 0,
        //             is_cat: isCat ? isCat : 0,
        //             small: isSmall ? isSmall : 0,
        //             med: isMedium ? isMedium : 0,
        //             large: isLarge ? isLarge : 0,
        //             giant: isGiant ? isGiant : 0,
        //         };
    
        //         const { city, bio, is_pup, is_cat, short_term, long_term, pet_amt, small, med, large, giant } = hostData;
    
        //         //Call searchHost function 
        //         searchHost( city, bio, is_pup, is_cat, short_term, long_term, pet_amt, small, med, large, giant );
    
        //         //Empty input fields
        //         $("#city").val("");
        //         $("#dog").prop("checked", false);
        //         $("#cat").prop("checked", false);
        //         $("#short-term").prop("checked", false);
        //         $("#long-term").prop("checked", false);
        //         $("#small").prop("checked", false);
        //         $("#medium").prop("checked", false);
        //         $("#large").prop("checked", false);
        //         $("#giant").prop("checked", false);
        //     } else {
        //         alert("Rate and Pet Amount cannot be empty.");
        //     }
        // });
    }
});

