$(function() {
    $(".devourBurger").on("click", function() {
      var id = $(this).data("burgerid");
    //   var newSleep = $(this).data("newsleep");
  
      var newDevourState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
        //   console.log("changed devoured state to", newDevourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
        //   console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });