//// AJAX CALL to return hosts by search form submission.
// $.post("/api/host/search"); 

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load 

$(() => { 

    const searchForm = $("form#search");
    const cityInput = $("input#city-input");

    //Set variables getting from input events for hostData
    let city, isDog, isCat, isShortTerm, isLongTerm, petAmount, isSmall, isMedium, isLarge, isGiant;

    //city
    $("input#dog").on("change", function() {
        city = $(this).is(":checked") ? $("input[name=city]:checked", "form#signup").val() : (isDog = 0);
    });
    
    //is_pup
    $("input#dog").on("change", function() {
        isDog = $(this).is(":checked") ? $("input[name=dog]:checked", "form#search").val() : (isDog = 0);
    });

    //is_cat
    $("input#cat").on("change", function() {
        isCat = $(this).is(":checked") ? $("input[name=cat]:checked", "form#search").val() : (isCat = 0);
    });

    //short_term
    $("input#short-term").on("change", function() {
        isShortTerm = $(this).is(":checked") ? $("input[name=short_term]:checked", "form#search").val() : (isShortTerm = 0);
    });

    //long_term
    $("input#long-term").on("change", function() {
        isLongTerm = $(this).is(":checked") ? $("input[name=long_term]:checked", "form#search").val() : (isLongTerm = 0);
    });

    //pet_amt
    $("input#pet-amount").on("keyup mouseup", function() {
        petAmount = $(this).val();
    });

    //Size - Small
    $("input#small").on("change", function() {
        isSmall = $(this).is(":checked") ? $("input[name=small]:checked", "form#search").val() : (isSmall = 0);
    });

    //Size - Medium
    $("input#medium").on("change", function() {
        isMedium = $(this).is(":checked") ? $("input[name=med]:checked", "form#search").val() : (isMedium = 0);
    });

    //Size - Large
    $("input#large").on("change", function() {
        isLarge = $(this).is(":checked") ? $("input[name=large]:checked", "form#search").val() : (isLarge = 0);
    });

    //Size - Giant
    $("input#giant").on("change", function() {
        isGiant = $(this).is(":checked") ? $("input[name=giant]:checked", "form#search").val() : (isGiant = 0);
    });



    searchForm.on("submit", (event) => {
        event.preventDefault();
        console.log("working");
        
        console.log($("#dogCare").val());

        // if (city) {

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

        // const {city, bio, is_pup, is_cat, short_term, long_term, pet_amt, small, med, large, giant} = userData;

        //Call signupHost function 
        seekHost(userData);

        //Empty input fields
        $("#city-input").val("");
        $("#dog").prop("checked", false);
        $("#cat").prop("checked", false);
        $("#short-term").prop("checked", false);
        $("#long-term").prop("checked", false);
        $("#pet-amount").val("");
        $("#small").prop("checked", false);
        $("#medium").prop("checked", false);
        $("#large").prop("checked", false);
        $("#giant").prop("checked", false);
        // } else {
        // 	alert("City cannot be empty.");
        // }
    });

    function seekHost(userData) {
        // console.log($.param(userData));
        $.get("/result?"+ $.param(userData))
            .then((data) => {
                // ****** Maybe have to change later
 
                window.location.href = "/result";
                // console.log(data);   
            })
            .catch((err) => {
                console.log((err.responseJSON));
            });
    }
    
});


