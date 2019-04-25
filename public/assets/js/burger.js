$(function() {
    
    $(".nomburger-btn").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("Burger nommed", devouredState);
                location.reload();
            }
        );

        // var noise = document.getElementById("Eatingnoise");
        // function playAudio() {
        //     noise.play();
        // }
        
    });

    $("#burgerenter").on("click", function(event) {

        event.preventDefault();

        console.log("hit");

        var newburger = {
            burgername: $("#newburger").val().trim(),
            devoured: 0,
        };
        console.log(newburger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function() {
                console.log("Made new burger");
                location.reload();
            }
        );

    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("delete burger", id);

                location.reload();
            }
        );
    });


});