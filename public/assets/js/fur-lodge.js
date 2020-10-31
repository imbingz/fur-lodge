//// AJAX CALL to return hosts by search form submission.
// $.post("/api/host/search"); 

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load 

$(() => { 

    const searchForm = $("form#search");
    const cityInput = $("input#city-input");

    searchForm.on("submit", (event) => {
        event.preventDefault();
        console.log("working");
        
        console.log($("#dogCare").val());

        const userData = {
            city: cityInput.val().trim(),
            is_pup: isDog ? isDog : 0, 
            is_cat: isCat ? isCat : 0,
            short_term: isShortTerm ? isShortTerm : 0,
            long_term: isLongTerm ? isLongTerm : 0,
            pet_amt: petAmount,
            small: isSmall ? isSmall : 0,
            med: isMedium ? isMedium : 0,
            large: isLarge ? isLarge : 0,
            giant: isGiant ? isGiant : 0
        }; 

        //     if (!userData.city || !userData.)

    });
});


