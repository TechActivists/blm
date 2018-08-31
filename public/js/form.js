// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $("#submit-btn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newVictim = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        gender: $("#gender").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        testimonial: $("#testimonial").val().trim(),
        media_resources: $("#media_resources").val().trim(),
        contact_person_name: $("#contact_person_name").val().trim(),
        contact_person_email: $("#contact_person_email").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/victim/new", {
        type: "POST",
        data: newVictim
      }).then(
        function() {
          console.log("created new victim");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  