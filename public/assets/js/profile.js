$(() => {
    $.ajax({
        type: "get",
        url: "/api/host/1",
        success: (data) => {
            console.log(data);
            console.log("success!");
            // location.reload();
        }
    });
});

