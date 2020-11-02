/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
//Wait for the document to load

$(() => {
    // Gets the part of the url that comes after the "?"
    // let url = window.location.search;

    //Set changeData obj
    let changeData, prop, value;
    changeData = {};

    //Set event listener on input elements and get values of change fields 
    $("form.editProfile").on("change", "input", function() {
        prop = $(this).attr("name");
        if ($(this).val() === "true") {
            value = 0;
        } else if ($(this).val() === "false") {
            value = 1;
        } else {
            value = $(this).val();
        }
        changeData[prop] = value;
    });

    //Set Event listener on textarea elements and get value if changed
    $("form.editProfile").on("change", "textarea", function() {
        prop = $(this).attr("name");
        value = $(this).val();
        changeData[prop] = value;
    });

    //Submit button event listener, send PUT request with changeData.
    $("#submit-btn").on("click", getChanges);

    function getChanges(event) {
        event.preventDefault();
        // **** delete later 
        console.log(changeData);
       
        //Put Reqyest
        $.put("api/profile", changeData)
            .then((data) => console.log(data))
            . catch(err => console.log(err));
    }
  



}); // =====> END