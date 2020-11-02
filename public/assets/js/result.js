//Wait for page to finish loading
$(() => {
    $("form.booking").on("submit", $("#submitBooking-btn"), (e) => {
        e.preventDefault();
        console.log("Hi");
    });

});