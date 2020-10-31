/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load
$(() => {
    //Set varialbes getting from input events for hostData
    let isDog, isCat, rateValue, isShortTerm, isLongTerm, petAmount, isSmall, isMedium, isLarge, isGiant, isAvailable;

    //is_pup
    $("input#dog").on("change", function() {
        isDog = $(this).is(":checked") ? $("input[name=dog]:checked", "form.signup").val() : (isDog = 0);
    });

    //is_cat
    $("input#cat").on("change", function() {
        isCat = $(this).is(":checked") ? $("input[name=cat]:checked", "form.signup").val() : (isCat = 0);
    });

    //Rate value - from number box
    $("input#rate").on("keyup mouseup", function() {
        rateValue = $(this).val();
    });

    //short_term
    $("input#short-term").on("change", function() {
        isShortTerm = $(this).is(":checked") ? $("input[name=short_term]:checked", "form.signup").val() : (isShortTerm = 0);
    });

    //long_term
    $("input#long-term").on("change", function() {
        isLongTerm = $(this).is(":checked") ? $("input[name=long_term]:checked", "form.signup").val() : (isLongTerm = 0);
    });

    //pet_amt
    $("input#pet-amount").on("keyup mouseup", function() {
        petAmount = $(this).val();
    });

    //Size - Small
    $("input#small").on("change", function() {
        isSmall = $(this).is(":checked") ? $("input[name=small]:checked", "form.signup").val() : (isSmall = 0);
    });

    //Size - Medium
    $("input#medium").on("change", function() {
        isMedium = $(this).is(":checked") ? $("input[name=med]:checked", "form.signup").val() : (isMedium = 0);
    });

    //Size - Large
    $("input#large").on("change", function() {
        isLarge = $(this).is(":checked") ? $("input[name=large]:checked", "form.signup").val() : (isLarge = 0);
    });

    //Size - Giant
    $("input#giant").on("change", function() {
        isGiant = $(this).is(":checked") ? $("input[name=giant]:checked", "form.signup").val() : (isGiant = 0);
    });

    //Availability
    $("input#availability").on("change", function() {
        isAvailable = $(this).is(":checked") ? $("input[name=availabile]:checked", "form.signup").val() : (isAvailable = 0);
    });


    // eslint-disable-next-line prefer-arrow-callback
    $("form.signup").on("submit", (event) => {
        //Prevent page reload when submitting form
        event.preventDefault();

        //Check rate and pet_amt fields and make sure they are not empty when the form is submitted
        if (rate && petAmount) {
        //Get hostData obj
            const hostData = {
                email: $("#email").val().trim(),
                password: $("#password").val().trim(),
                first_name: $("#first-name").val().trim(),
                last_name: $("#last-name").val().trim(),
                phone: $("#phone").val().trim(),
                city: $("#city").val().trim(),
                bio: $("#bio").val().trim(),
                is_pup: isDog ? isDog : 0,
                is_cat: isCat ? isCat : 0,
                rate: rateValue,
                short_term: isShortTerm ? isShortTerm : 0,
                long_term: isLongTerm ? isLongTerm : 0,
                pet_amt: petAmount,
                small: isSmall ? isSmall : 0,
                med: isMedium ? isMedium : 0,
                large: isLarge ? isLarge : 0,
                giant: isGiant ? isGiant : 0,
                available: isAvailable ? isAvailable : 0,
            };

            const { email, password, first_name, last_name, phone, city, bio, is_pup, is_cat, rate, short_term, long_term, pet_amt, small, med, large, giant, available } = hostData;

            //Call signupHost function 
            signupHost(email, password, first_name, last_name, phone, city, bio, is_pup, is_cat, rate, short_term, long_term, pet_amt, small, med, large, giant, available);

            //Empty input fields
            $("#email").val("");
            $("#password").val("");
            $("#first-name").val("");
            $("#last-name").val("");
            $("#phone").val("");
            $("#city").val("");
            $("#bio").val("");
            $("#dog").prop("checked", false);
            $("#cat").prop("checked", false);
            $("#rate").val("");
            $("#short-term").prop("checked", false);
            $("#long-term").prop("checked", false);
            $("#pet-amount").val("");
            $("#small").prop("checked", false);
            $("#medium").prop("checked", false);
            $("#large").prop("checked", false);
            $("#giant").prop("checked", false);
            $("#availability").prop("checked", false);
        } else {
        	alert("Rate and Pet Amount cannot be empty.");
        }
    });

    //A POST request sending the host Signup Email, Password to Route handler
    function signupHost(email, password, first_name, last_name, phone, city, bio, is_pup, is_cat, rate, short_term, long_term, pet_amt, small, med, large, giant, available ) {
        $.post("api/signup", {
            email,
            password,
            first_name,
            last_name,
            phone,
            city,
            bio,
            is_pup,
            is_cat,
            rate,
            short_term,
            long_term,
            pet_amt,
            small,
            med,
            large,
            giant,
            available 
        })
            .then((data) => {
                // ****** Maybe have to change later
                window.location.replace("/profile");
                // console.log(data);   
            })
            .catch((err) => {
                console.log((err.responseJSON));
            });
    }
}); //========> END
