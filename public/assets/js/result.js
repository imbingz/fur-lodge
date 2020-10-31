$(()=> {

    const formData = {
        "small": false,
        "med": false,
        "large": false,
        "giant": false,
        "is_pup": false,
        "pet_amt": 1,
        "available": true
    };

    $.post("/result",formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
});