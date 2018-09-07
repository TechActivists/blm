// Make sure we wait to attach our handlers until the DOM is fully loaded.

  
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
      $.ajax("/victims/new", {
        type: "POST",
        data: newVictim
      }).then(
        function(result) {
          console.log("created new victim");
          console.log(result);
          console.log(data);
          // Reload the page to get the updated list
          location.reload();

          d3.json(result), function(data) {
            var canvas = d3.select("body").append("svg")
               .attr("width", 500)
               .attr("height", 500)
    
               canvas.selectAll("rect")
                 .data(data)
                 .enter()
                   .append("rect")
                   .attr("width", function(d) {
                       return d.gender;
                   })
                   .attr("y", function(d, i) {
                     return i * 50;
                   })
                   .attr("fill", "blue")
         }

        }
      );
    });


  